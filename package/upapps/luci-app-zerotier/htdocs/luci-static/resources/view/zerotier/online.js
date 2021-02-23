'use strict';
'require view';
'require poll';
'require rpc';
'require form';

var callzerotierGetStatus;

callzerotierGetStatus = rpc.declare({
	object: 'luci.zerotier',
	method: 'get_status',
	expect: {  }
});

return view.extend({
	load: function() {
		return Promise.all([
			callzerotierGetStatus()
		]);
	},

	poll_status: function(nodes, data) {

		var clients = Array.isArray(data[0].clients) ? data[0].clients : [];

		var rows = clients.map(function(client) {
			var nat;
			var time;

			if (client.nat == 1)
				nat = _('<font color=green>--- NAT ---</font>');
			else
				nat = _('<font color=red>--- NAT ---</font>');

			if (client.time == 'none')
				time = '<font color=red>' + _('Not ready') + '</font>';
			else
				time = '%t'.format(client.time);

			return [
				client.netid,
				client.remarks,
				client.Interface,
				client.speed,
				client.ipaddrs,
				client.macaddr,
				nat,
				time
			];
		});

		cbi_update_table(nodes.querySelector('#zerotier_status_table'), rows, E('em', _('There is no active interface information')));

		return;
	},

	render: function(data) {

		var m, s, o;

		m = new form.Map('zerotier');

		s = m.section(form.GridSection, '_active_info');

		s.render = L.bind(function(view, section_id) {
			var table = E('div', { 'class': 'table cbi-section-table', 'id': 'zerotier_status_table' }, [
				E('div', { 'class': 'tr table-titles' }, [
					E('div', { 'class': 'th' }, _('Internet ID')),
					E('div', { 'class': 'th' }, _('Comment')),
					E('div', { 'class': 'th' }, _('Interface')),
					E('div', { 'class': 'th' }, _('speed')),
					E('div', { 'class': 'th' }, _('IP address')),
					E('div', { 'class': 'th' }, _('MAC address')),
					E('div', { 'class': 'th' }, _('NAT state')),
					E('div', { 'class': 'th' }, _('Online Time')),
				])
			]);

			return E('div', { 'class': 'cbi-section cbi-tblsection' }, [
					E('h3', _('Interface information for the activity')), table ]);
		}, o, this);

		return m.render().then(L.bind(function(m, nodes) {
			poll.add(L.bind(function() {
				return Promise.all([
					callzerotierGetStatus()
				]).then(L.bind(this.poll_status, this, nodes));
			}, this), 3);
			return nodes;
		}, this, m));
	},
	handleSaveApply: null,
	handleSave: null,
	handleReset: null
});
