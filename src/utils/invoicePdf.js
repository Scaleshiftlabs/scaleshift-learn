import { SELLER, GST } from "../config/gst";

export function buildInvoiceHTML(invoice) {
  const amount = invoice.amount;
  const cgst = Math.round((amount * GST.cgst) / 100);
  const sgst = Math.round((amount * GST.sgst) / 100);
  const total = amount + cgst + sgst;

  return `
<!DOCTYPE html>
<html>
<head>
  <title>Invoice ${invoice.invoiceId}</title>
  <style>
    @page { margin: 24px; }
    body { font-family: Arial, sans-serif; color:#111; }
    .box { border:1px solid #e5e7eb; padding:16px; border-radius:8px; }
    h1 { color:#2563eb; margin-bottom:8px; }
    table { width:100%; border-collapse: collapse; margin-top:12px; }
    th, td { border:1px solid #e5e7eb; padding:8px; text-align:left; }
    .right { text-align:right; }
    .muted { color:#555; font-size:12px; }
  </style>
</head>
<body>
  <h1>Tax Invoice</h1>

  <div class="box">
    <b>${SELLER.name}</b><br/>
    GSTIN: ${SELLER.gstin}<br/>
    ${SELLER.address}
  </div>

  <div class="box" style="margin-top:12px;">
    <b>Invoice ID:</b> ${invoice.invoiceId}<br/>
    <b>Date:</b> ${invoice.issuedAt.split("T")[0]}<br/>
    <b>Billed To:</b> ${invoice.userEmail}
  </div>

  <table>
    <thead>
      <tr>
        <th>Description</th>
        <th class="right">Amount (₹)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${invoice.courseTitle}</td>
        <td class="right">${amount}</td>
      </tr>
      <tr>
        <td>CGST (${GST.cgst}%)</td>
        <td class="right">${cgst}</td>
      </tr>
      <tr>
        <td>SGST (${GST.sgst}%)</td>
        <td class="right">${sgst}</td>
      </tr>
      <tr>
        <th>Total</th>
        <th class="right">${total}</th>
      </tr>
    </tbody>
  </table>

  <p class="muted" style="margin-top:16px;">
    This is a computer generated invoice.
  </p>
</body>
</html>
`;
}
