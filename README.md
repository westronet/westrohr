<div align="center">
	<a href="https://frappehr.com">
		<img src="https://raw.githubusercontent.com/frappe/hrms/develop/hrms/public/images/frappe-hr-logo.png" height="128" alt="Frappe HR Logo">
	</a>
	<h2>Westro HR</h2>
	<p align="center">
		<p> modern, and easy-to-use HR and Payroll Software for all organizations</p>
	</p>

[![CI](https://github.com/westronet/westrohr/actions/workflows/ci.yml/badge.svg?branch=develop)](https://github.com/westronet/westrohr/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/frappe/hrms/branch/develop/graph/badge.svg?token=0TwvyUg3I5)](https://codecov.io/gh/frappe/hrms)

[https://frappehr.com](https://frappehr.com)

<p align="center">
	<a href="https://www.producthunt.com/posts/frappe-hr?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-frappe&#0045;hr" target="_blank">
		<img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=421276&theme=dark" alt="Frappe&#0032;HR - The&#0032;missing&#0032;open&#0032;source&#0032;HR&#0032;and&#0032;payroll&#0032;software | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" />
	</a>
</p>

<div align="center" style="max-height: 40px;">
	<a href="https://westronet.com/hrms/signup">
		<img src=".github/try-on-f-cloud-button.svg" height="50">
	</a>
</div>



</div>

## Introduction

Westro HR has everything you need to drive excellence within the company. It's a complete HRMS solution with over 13 different modules right from Employee Management, Onboarding, Leaves, to Payroll, Taxation, and more!

![HRMS](hrms.png)

## Key Features

- Employee Management
- Employee Lifecycle
- Leave and Attendance
- Shift Management
- Expense Claims and Advances
- Hiring
- Performance Management
- Fleet Management
- Training
- Payroll
- Taxation
- Compensation
- Analytics

## Installation

### Manual Installation

1. [Install bench](https://github.com/frappe/bench).
2. [Install WestroErp](https://github.com/westronet/westroerp).
3. Once WestroERp is installed, add the hrms app to your bench by running

	```sh
	$ bench get-app https://github.com/westronet/westrohr
	```
4. After that, you can install the hrms app on the required site by running
	```sh
	$ bench --site sitename install-app westrohr
	```




## Contribute

1.  [Create an issue](https://github.com/westronet/westrohr/issues/new)

## License

GNU GPL V3. (See [license.txt](license.txt) for more information).

The WestroHR code is licensed as GNU General Public License (v3) and the copyright is owned by Frappe Technologies Pvt Ltd (Frappe) and Contributors.
