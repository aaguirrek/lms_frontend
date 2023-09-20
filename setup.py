from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in lms_frontend/__init__.py
from lms_frontend import __version__ as version

setup(
	name="lms_frontend",
	version=version,
	description="LMS FROMT",
	author="Frappe",
	author_email="admin@frappe.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
