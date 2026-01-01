import { useParams, Link } from "react-router-dom";

export default function Handouts() {
  const { id } = useParams();

  return (
    <div style={{ padding: 32, maxWidth: 700, margin: "0 auto" }}>
      <h1>Handouts</h1>
      <p style={{ opacity: 0.8 }}>
        Download the reference PDF for Module {id}. Keep it for revision.
      </p>

      <div
        style={{
          marginTop: 24,
          padding: 20,
          borderRadius: 12,
          background: "#020617",
          border: "1px solid #1e293b",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16
        }}
      >
        <div>
          <strong>Module {id} — PDF Notes</strong>
          <p style={{ marginTop: 6, opacity: 0.7 }}>
            Simple explanations · Key points · Examples
          </p>
        </div>

        <a href={`/handouts/module${id}.pdf`} download>
          <button>⬇ Download</button>
        </a>
      </div>

      <div style={{ marginTop: 32 }}>
        <Link to={`/course/module/${id}`}>← Back to Module</Link>
      </div>
    </div>
  );
}
