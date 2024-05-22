# Copyright (c) 2018, Westronet inc and contributors
# For license information, please see license.txt


from hrms.controllers.employee_boarding_controller import EmployeeBoardingController


class EmployeeSeparation(EmployeeBoardingController):
	def validate(self):
		super().validate()

	def on_submit(self):
		super().on_submit()

	def on_update_after_submit(self):
		self.create_task_and_notify_user()

	def on_cancel(self):
		super().on_cancel()
