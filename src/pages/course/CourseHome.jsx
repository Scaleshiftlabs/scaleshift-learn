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
    <div style={{ padding: 32, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 32 }}>Digital Marketing Foundations</h1>
      <p style={{ opacity: 0.8 }}>
        Learn step-by-step with videos, assignments, quizzes and handouts.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginTop: 32 }}>
        {modules.map((title, i) => (
          <Link key={i} to={`/course/module/${i + 1}`}>
            <div style={{
              padding: 20,
              borderRadius: 12,
              background: "#020617",
              border: "1px solid #1e293b",
              transition: "transform .15s ease"
            }}>
              <h3 style={{ marginTop: 0 }}>Module {i + 1}</h3>
              <p style={{ opacity: 0.8 }}>{title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
