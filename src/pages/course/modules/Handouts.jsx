import { useParams, Link } from "react-router-dom";

export default function Handouts() {
  const { id } = useParams();

  return (
    <div style={{ padding: 32, color: "white" }}>
      <h1>Module {id} — Handouts</h1>

      <a href={`/handouts/module${id}.pdf`} download>
        ⬇ Download Module {id} PDF
      </a>

      <div style={{ marginTop: 24 }}>
        <Link to={`/course/module/${id}`}>← Back to Module</Link>
      </div>
    </div>
  );
}
