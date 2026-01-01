import { payWithRazorpay } from "../utils/razorpayPay";
import { createPayment, savePayment } from "../utils/payments";
import { generateInvoice, saveInvoice } from "../utils/invoice";
import { grantAccess } from "../utils/purchase";

export default function PaymentModal({ course, onClose }) {
  function dummyPay() {
    const payment = createPayment(course);
    savePayment(payment);

    const invoice = generateInvoice(payment, course);
    saveInvoice(invoice);

    grantAccess(course.id);
    alert("Payment successful (Dummy)");
    onClose();
  }

  return (
    <div className="glass">
      <h2>Pay for Course</h2>
      <p><b>{course.title}</b></p>
      <p>Amount: ₹{course.price}</p>

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <button
          onClick={() => payWithRazorpay(course)}
          style={{
            padding: "10px 16px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Pay with Razorpay
        </button>

        <button
          onClick={dummyPay}
          style={{
            padding: "10px 16px",
            background: "#16a34a",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Dummy / Bank QR
        </button>

        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
