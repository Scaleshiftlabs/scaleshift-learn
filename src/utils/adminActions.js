import { generateInvoice } from "./invoice";
import { getUser } from "./auth";

/* helpers to write as another user */
function writeForUser(key, email, value) {
  localStorage.setItem(`${key}_${email}`, JSON.stringify(value));
}

function readForUser(key, email, fallback) {
  return JSON.parse(localStorage.getItem(`${key}_${email}`) || fallback);
}

export function adminMarkPaid({ email, course }) {
  const payment = {
    paymentId: "ADMIN_PAY_" + Date.now(),
    userEmail: email,
    courseId: course.id,
    amount: course.price,
    currency: "INR",
    status: "SUCCESS",
    method: "BANK_QR",
    createdAt: new Date().toISOString()
  };

  /* ---- save payment FOR USER ---- */
  const payments = readForUser("payments", email, "[]");
  payments.push(payment);
  writeForUser("payments", email, payments);

  /* ---- grant access FOR USER ---- */
  const purchases = readForUser("purchases", email, "{}");
  purchases[course.id] = { purchasedAt: payment.createdAt };
  writeForUser("purchases", email, purchases);

  /* ---- generate invoice FOR USER ---- */
  const invoice = generateInvoice(payment, course);
  const invoices = readForUser("invoices", email, "[]");
  invoices.push(invoice);
  writeForUser("invoices", email, invoices);

  return { payment, invoice };
}
