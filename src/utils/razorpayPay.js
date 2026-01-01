import { loadRazorpay } from "./razorpay";
import { savePayment } from "./payments";
import { generateInvoice, saveInvoice } from "./invoice";
import { grantAccess } from "./purchase";
import { getUser } from "./auth";

export async function payWithRazorpay(course) {
  const ok = await loadRazorpay();
  if (!ok) {
    alert("Razorpay SDK failed to load");
    return;
  }

  const user = getUser();
  const options = {
    key: "rzp_test_1234567890", // TEST KEY (replace later)
    amount: course.price * 100,
    currency: "INR",
    name: "ScaleShift Learn",
    description: course.title,
    handler: function (response) {
      const payment = {
        paymentId: response.razorpay_payment_id,
        userEmail: user.email,
        courseId: course.id,
        amount: course.price,
        currency: "INR",
        status: "SUCCESS",
        method: "RAZORPAY",
        createdAt: new Date().toISOString()
      };

      savePayment(payment);
      grantAccess(course.id);

      const invoice = generateInvoice(payment, course);
      saveInvoice(invoice);

      alert("Payment successful (Razorpay)");
      window.location.reload();
    },
    prefill: {
      email: user.email
    },
    theme: { color: "#2563eb" }
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
}
