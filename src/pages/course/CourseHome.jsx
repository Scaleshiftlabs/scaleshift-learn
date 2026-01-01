import { Link } from "react-router-dom";

const modules = [
  "Basics of Digital Marketing",
  "Marketing Channels",
  "Content Marketing",
  "Paid Advertising",
  "Analytics & Measurement",
  "Final Project"
];

export default function CourseHome() {
  return (
    <div style={{ padding: 32, maxWidth: 1000, margin: "0 auto" }}>
      <h1 style={{ fontSize: 34 }}>Digital Marketing Foundations</h1>
      <p style={{ color: "var(--muted)" }}>
        Beginner friendly · Practical · Simple English
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 20,
          marginTop: 32
        }}
      >
        {modules.map((title, i) => (
          <Link key={i} to={`/course/module/${i + 1}`}>
            <div className="card">
              <h3>Module {i + 1}</h3>
              <p style={{ color: "var(--muted)" }}>{title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
