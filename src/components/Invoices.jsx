import { getInvoices } from "../utils/invoice";
import InvoiceDownload from "./InvoiceDownload";

export default function Invoices() {
  const invoices = getInvoices();
  if (!invoices.length) return null;

  return (
    <div style={{ marginTop: "40px" }}>
      <h3>🧾 My Invoices</h3>

      {invoices.map(inv => (
        <div key={inv.invoiceId} className="glass" style={{ marginTop: "10px" }}>
          <p><b>{inv.courseTitle}</b></p>
          <p>Invoice ID: {inv.invoiceId}</p>
          <p>Amount: ₹{inv.amount}</p>
          <p>Date: {inv.issuedAt.split("T")[0]}</p>
          <InvoiceDownload invoice={inv} />
        </div>
      ))}
    </div>
  );
}
