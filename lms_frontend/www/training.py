import frappe

no_cache = 1


def get_context(context):
    if frappe.session.user == "Guest":
        frappe.throw(_("You need to be logged in to access this page"), frappe.PermissionError)
    csrf_token = frappe.sessions.get_csrf_token()
    frappe.db.commit()
    context.csrf_token = csrf_token
