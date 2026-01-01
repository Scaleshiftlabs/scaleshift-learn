import { useRef } from "react";
import { getProgress } from "../utils/progress";
import {
  issueCertificate,
  hasCertificate,
  getCertificates
} from "../utils/certificate";

export default function CertificateCard({ moduleId }) {
  const progress = getProgress(moduleId);
  const unlocked = progress === 100;
  const issued = hasCertificate(moduleId);
  const cert = getCertificates().find(c => c.courseId === moduleId);
  const iframeRef = useRef(null);

  function generate() {
    issueCertificate(moduleId);
  }

  function downloadPDF() {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.focus();
      iframeRef.current.contentWindow.print();
    }
  }

  const html = cert ? `
<!DOCTYPE html>
<html>
<head>
  <title>Certificate</title>
  <style>
    @page { margin: 0; }
    body {
      margin: 0;
      padding: 40px;
      font-family: Arial, sans-serif;
      background: #fff;
    }
    .cert {
      border: 6px solid #2563eb;
      padding: 40px;
      text-align: center;
      height: calc(100vh - 80px);
      box-sizing: border-box;
    }
    h1 { color: #2563eb; margin-top: 40px; }
    .meta { margin-top: 40px; font-size: 12px; color: #555; }
  </style>
</head>
<body>
  <div class="cert">
    <h1>Certificate of Completion</h1>
    <p>This certifies that the learner has successfully completed</p>
    <h2>${moduleId}</h2>
    <div class="meta">
      Certificate ID: ${cert.certificateId}<br/>
      Issued on: ${cert.issuedAt.split("T")[0]}<br/>
      Issued by ScaleShift Learn
    </div>
  </div>
</body>
</html>
` : "";

  return (
    <div className="glass" style={{ marginTop: "20px" }}>
      <h3>🎓 Certificate</h3>

      {!unlocked && <p>Locked 🔒 — Complete 100%</p>}

      {unlocked && !issued && (
        <button
          onClick={generate}
          style={{
            padding: "10px 16px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Generate Certificate
        </button>
      )}

      {unlocked && issued && (
        <>
          <p>Unlocked ✅</p>
          <p style={{ fontSize: "12px" }}>
            Issued on: {cert.issuedAt.split("T")[0]}
          </p>

          <button
            onClick={downloadPDF}
            style={{
              marginTop: "10px",
              padding: "10px 16px",
              background: "#16a34a",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Download as PDF
          </button>

          {/* hidden iframe for print */}
          <iframe
            ref={iframeRef}
            title="certificate-pdf"
            srcDoc={html}
            style={{ display: "none" }}
          />
        </>
      )}
    </div>
  );
}
