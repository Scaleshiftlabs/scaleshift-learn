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
    <div style={{ padding: 32, maxWidth: 1100, margin: "0 auto" }}>
      <h1 style={{ fontSize: 36 }}>Digital Marketing Foundations</h1>
      <p style={{ opacity: .7 }}>Beginner friendly · Practical · Simple English</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 24,
          marginTop: 32
        }}
      >
        {modules.map((title, i) => (
          <Link key={i} to={`/course/module/${i + 1}`}>
            <div className="glass card">
              <h3>Module {i + 1}</h3>
              <p style={{ opacity: .75 }}>{title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
