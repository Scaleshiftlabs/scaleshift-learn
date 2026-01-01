import { getUser } from "./auth";

function key() {
  const user = getUser();
  return user ? `payments_${user.email}` : "payments";
}

export function createPayment(course) {
  const user = getUser();
  if (!user) return null;

  return {
    paymentId: "PAY_" + Date.now(),
    userEmail: user.email,
    courseId: course.id,
    amount: course.price,
    currency: "INR",
    status: "SUCCESS",
    method: "DUMMY",
    createdAt: new Date().toISOString()
  };
}

export function savePayment(payment) {
  const data = JSON.parse(localStorage.getItem(key()) || "[]");
  data.push(payment);
  localStorage.setItem(key(), JSON.stringify(data));
}

export function getPayments() {
  return JSON.parse(localStorage.getItem(key()) || "[]");
}
