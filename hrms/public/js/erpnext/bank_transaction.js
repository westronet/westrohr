// Copyright (c) 2022, Westronet inc and contributors
// For license information, please see license.txt

frappe.ui.form.on("Bank Transaction", {
	get_payment_doctypes: function () {
		return [
			"Payment Entry",
			"Journal Entry",
			"Sales Invoice",
			"Purchase Invoice",
			"Expense Claim",
		];
	},
});
