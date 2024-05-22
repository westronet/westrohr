// Copyright (c) 2015, Westronet inc and Contributors
// License: GNU General Public License v3. See license.txt

frappe.views.calendar["Leave Application"] = {
	field_map: {
		start: "from_date",
		end: "to_date",
		id: "name",
		title: "title",
		docstatus: 1,
		color: "color",
	},
	options: {
		header: {
			left: "prev,next today",
			center: "title",
			right: "month",
		},
	},
	get_events_method: "hrms.hr.doctype.leave_application.leave_application.get_events",
};
