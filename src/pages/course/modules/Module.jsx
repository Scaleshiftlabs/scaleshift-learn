import { useParams, Link } from "react-router-dom";

export default function Module() {
  const { id } = useParams();

  const actions = [
    { label: "🎥 Videos", path: "video/1" },
    { label: "📝 Assignment", path: "assignment" },
    { label: "❓ Quiz", path: "quiz" },
    { label: "📄 Handouts", path: "handouts" }
  ];

  return (
    <div style={{ padding: 32, maxWidth: 700, margin: "0 auto" }}>
      <h1>Module {id}</h1>

      <div style={{ display: "grid", gap: 12, marginTop: 24 }}>
        {actions.map(a => (
          <Link key={a.path} to={`/course/module/${id}/${a.path}`}>
            <div style={{
              padding: 16,
              borderRadius: 10,
              background: "#020617",
              border: "1px solid #1e293b"
            }}>
              {a.label}
            </div>
          </Link>
        ))}
      </div>

      <div style={{ marginTop: 32 }}>
        <Link to="/course">← Back to Course</Link>
      </div>
    </div>
  );
}
