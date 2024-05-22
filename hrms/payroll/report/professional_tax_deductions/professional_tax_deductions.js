// Copyright (c) 2016, Westronet inc and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.require("assets/hrms/js/salary_slip_deductions_report_filters.js", function () {
	frappe.query_reports["Professional Tax Deductions"] =
		hrms.salary_slip_deductions_report_filters;
});
