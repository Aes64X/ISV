'use strict';
'require baseclass';
'require dom';
'require rpc';
'require uci';

var callzerotierGetStatus;

callzerotierGetStatus = rpc.declare({
	object: 'luci.zerotier',
	method: 'get_status',
	expect: {  }
});

return baseclass.extend({
	title: _('Zerotier Interface information'),

	load: function() {
		return Promise.all([
			callzerotierGetStatus(),
		]);
	},

	render: function(data) {

		var table = E('div', { 'class': 'table', 'id': 'zerotier_status_table' }, [
			E('div', { 'class': 'tr table-titles' }, [
					E('div', { 'class': 'th' }, _('Internet ID')),
					E('div', { 'class': 'th' }, _('Comment')),
					E('div', { 'class': 'th' }, _('Interface')),
					E('div', { 'class': 'th' }, _('speed')),
					E('div', { 'class': 'th' }, _('IP address')),
					E('div', { 'class': 'th' }, _('MAC address')),
					E('div', { 'class': 'th' }, _('NAT state')),
					E('div', { 'class': 'th' }, _('Online Time'))
			])
		]);

		var clients = Array.isArray(data[0].clients) ? data[0].clients : [];

		var rows = clients.map(function(client) {
			var nat;
			var time;

			if (client.nat == 1)
				nat = _('<font color=green>--- NAT ---</font>');
			else
				nat = _('<font color=red>--- NAT ---</font>');

			if (client.time  == 'none')
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

		cbi_update_table(table, rows, E('em', _('There is no active interface information')));

		return table;
	}
});
