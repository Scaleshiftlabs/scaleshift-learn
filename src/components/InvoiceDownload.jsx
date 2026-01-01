import { useRef } from "react";
import { buildInvoiceHTML } from "../utils/invoicePdf";

export default function InvoiceDownload({ invoice }) {
  const iframeRef = useRef(null);
  const html = buildInvoiceHTML(invoice);

  function download() {
    iframeRef.current?.contentWindow?.print();
  }

  return (
    <>
      <button
        onClick={download}
        style={{
          padding: "8px 12px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginTop: "8px"
        }}
      >
        Download Invoice (PDF)
      </button>

      <iframe
        ref={iframeRef}
        title="invoice-pdf"
        srcDoc={html}
        style={{ display: "none" }}
      />
    </>
  );
}
