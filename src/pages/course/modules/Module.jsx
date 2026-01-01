import { useParams, Link } from "react-router-dom";

export default function Module() {
  const { id } = useParams();

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f172a",
      color: "white",
      padding: 32
    }}>
      <h1>Module {id}</h1>
      <p>This module contains videos, assignment, quiz, and handouts.</p>

      <ul style={{ lineHeight: "2" }}>
        <li>
          <Link to={`/course/module/${id}/video/1`} style={{ color: "#38bdf8" }}>
            ▶ Video 1
          </Link>
        </li>
        <li>
          <Link to={`/course/module/${id}/video/2`} style={{ color: "#38bdf8" }}>
            ▶ Video 2
          </Link>
        </li>
        <li>📝 Assignment (coming)</li>
        <li>❓ Quiz (coming)</li>
      </ul>

      <p style={{ marginTop: 24 }}>
        <Link to="/course" style={{ color: "#a5b4fc" }}>
          ← Back to Course
        </Link>
      </p>
    </div>
  );
}
