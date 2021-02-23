'use strict';
'require fs';
'require rpc';
'require form';
'require view';

function getzerotier() {
	return fs.exec('/bin/pidof', ['zerotier-one']).then(function (res) {
		if (res.code === 0) {
			return res.stdout.trim();
		} else {
			return "";
		}
	});
}

function zerotierServiceStatus() {
	return Promise.all([
		getzerotier(),
		L.resolveDefault(fs.exec('/bin/pidof', ['zerotier-one']), null)
	]);
}

function zerotierRenderStatus(res) {
	var renderHTML = "";
	var isRunning = res[0];

	if (isRunning) {
		renderHTML += "<span style=\"color:green;font-weight:bold\">" + _("RUNNING") + ' PID:' + res[1].stdout.trim() + "</span>";
		return renderHTML;
	} else {
		renderHTML += "<span style=\"color:red;font-weight:bold\">" + _("NOT RUNNING") + "</span>";
		return renderHTML;
	}
}

return view.extend({
	callHostHints: rpc.declare({
		object: 'luci-rpc',
		method: 'getHostHints',
		expect: { '': {} }
	}),

	load: function() {
	},

	render: function(hosts) {
		var m, s, o;
		m = new form.Map('zerotier', _('ZeroTier'), _('The open source <a href=\"https://github.com/zerotier/ZeroTierOne\" target=\"_blank\">ZeroTier</a> can aggregate clients under the serial or WAN network into a virtual route to achieve peer-to-peer mutual access, such as remote access to the NAS commissioning and monitoring as the coaxial of a certain encrypted traffic!'));

		s = m.section(form.NamedSection, '');
		s.anonymous = true;
		s.render = function (section_id) {
			L.Poll.add(function () {
				return L.resolveDefault(zerotierServiceStatus()).then(function (res) {
					var view = document.getElementById("service_status");
					view.innerHTML = zerotierRenderStatus(res);
				});
			});

			return E('div', { class: 'cbi-section' }, [
					E('div', { id: 'service_status' },
						_('Collecting data ...'))
				])
			}

		s = m.section(form.TypedSection, 'zerotier', _('Device identification code'));
		s.anonymous = true;

		o = s.option(form.Flag, 'enabled', _('Enabled'));
		o.rmempty = false;
		o.default = o.enabled;
		o.editable = true;

		o = s.option(form.Value, 'secret', _('Device identification code'), _('The only basis for identifying the device (the first run will be automatically generated, please do not move if not necessary, such as device migration)'));
		o.password = true;

		s = m.section(form.GridSection, 'join', _('Configure client'));
		s.anonymous = true;
		s.addremove = true;

		o = s.option(form.Flag, 'enabled', _('Enabled'), _('Enable or disable network'));
		o.rmempty = false;
		o.editable = true;

		o = s.option(form.Value, 'join', _('network ID'), _('Identification code of access network domain'));
		o.rmempty = true;

		return m.render();
	}
});
