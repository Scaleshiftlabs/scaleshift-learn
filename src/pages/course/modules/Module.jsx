import { useParams, Link } from "react-router-dom";

export default function Module() {
  const { id } = useParams();

  return (
    <div style={{ maxWidth: 720, margin: "40px auto", padding: 16 }}>
      <h1 style={{ textAlign: "center", marginBottom: 32 }}>
        Module {id}
      </h1>

      <div className="card module-item">
        🎬 Videos
        <Link to={`/course/module/${id}/video/1`}>Open →</Link>
      </div>

      <div className="card module-item">
        📝 Assignment
        <Link to={`/course/module/${id}/assignment`}>Open →</Link>
      </div>

      <div className="card module-item">
        ❓ Quiz
        <Link to={`/course/module/${id}/quiz`}>Open →</Link>
      </div>

      <div className="card module-item">
        📄 Handouts
        <Link to={`/course/module/${id}/handouts`}>Open →</Link>
      </div>

      <hr />

      <Link to="/course">← Back to Course</Link>
    </div>
  );
}
