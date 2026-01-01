import { useParams, Link } from "react-router-dom";

export default function Video() {
  const { id, vid } = useParams();

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
      <h1>Module {id} — Video {vid}</h1>

      <div style={{ marginTop: 20 }}>
        <video width="100%" controls>
          <source src="/sample.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* NAVIGATION */}
      <div style={{ marginTop: 40, display: "flex", gap: 24 }}>
        <Link
          to={`/course/module/${id}`}
          style={{ color: "#a5b4fc", textDecoration: "none" }}
        >
          ← Back to Module
        </Link>

        <Link
          to="/course"
          style={{ color: "#a5b4fc", textDecoration: "none" }}
        >
          ⬅ Back to Course
        </Link>
      </div>
    </div>
  );
}
