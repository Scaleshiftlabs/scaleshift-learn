import { useParams, Link, Outlet } from "react-router-dom";

export default function Module() {
  const { id } = useParams();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: 32,
        maxWidth: 900
      }}
    >
      <h1>Module {id}</h1>
      <p>Videos • Assignment • Quiz • Handouts</p>

      <ul style={{ lineHeight: "2", marginTop: 24 }}>
        <li>
          <Link to="video/1" style={{ color: "#38bdf8" }}>
            ▶ Video 1
          </Link>
        </li>
        <li>
          <Link to="video/2" style={{ color: "#38bdf8" }}>
            ▶ Video 2
          </Link>
        </li>
        <li>
          <Link to="assignment" style={{ color: "#38bdf8" }}>
            📝 Assignment
          </Link>
        </li>
        <li>
          <Link to="quiz" style={{ color: "#38bdf8" }}>
            ❓ Quiz
          </Link>
        </li>
      </ul>

      {/* 👇 THIS IS THE MISSING PIECE */}
      <div style={{ marginTop: 40 }}>
        <Outlet />
      </div>

      <div style={{ marginTop: 40 }}>
        <Link to="/course" style={{ color: "#a5b4fc" }}>
          ← Back to Course
        </Link>
      </div>
    </div>
  );
}
