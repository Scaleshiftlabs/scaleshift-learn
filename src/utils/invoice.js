import { getUser } from "./auth";

function key() {
  const user = getUser();
  return user ? `invoices_${user.email}` : "invoices";
}

export function generateInvoice(payment, course) {
  return {
    invoiceId: "INV_" + Date.now(),
    userEmail: payment.userEmail,
    courseTitle: course.title,
    amount: payment.amount,
    currency: payment.currency,
    paymentId: payment.paymentId,
    issuedAt: new Date().toISOString()
  };
}

export function saveInvoice(invoice) {
  const data = JSON.parse(localStorage.getItem(key()) || "[]");
  data.push(invoice);
  localStorage.setItem(key(), JSON.stringify(data));
}

export function getInvoices() {
  return JSON.parse(localStorage.getItem(key()) || "[]");
}
