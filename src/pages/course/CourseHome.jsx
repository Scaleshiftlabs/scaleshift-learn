import { Link } from "react-router-dom";
import { getModuleProgress, getCourseProgress } from "../../utils/progress";

const modules = [
  "Basics of Digital Marketing",
  "Marketing Channels",
  "Content Marketing",
  "Paid Advertising",
  "Analytics & Measurement",
  "Final Project"
];

export default function CourseHome() {
  const courseProgress = getCourseProgress();

  return (
    <div style={{ padding: 32, maxWidth: 1100, margin: "0 auto" }}>
      <h1>Digital Marketing Foundations</h1>
      <p style={{ opacity: 0.7 }}>
        Course Progress: <strong>{courseProgress}%</strong>
      </p>

      <div style={{ height: 10, background: "#00000030", borderRadius: 10, overflow: "hidden", marginBottom: 32 }}>
        <div style={{ width: `${courseProgress}%`, height: "100%", background: "#38bdf8" }} />
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: 24
      }}>
        {modules.map((title, i) => {
          const p = getModuleProgress(i + 1);
          return (
            <Link key={i} to={`/course/module/${i + 1}`}>
              <div className="glass card">
                <h3>Module {i + 1}</h3>
                <p>{title}</p>
                <div style={{ fontSize: 14, opacity: 0.7 }}>
                  Progress: {p}%
                </div>
                <div style={{ height: 6, background: "#00000030", borderRadius: 6, marginTop: 6 }}>
                  <div style={{ width: `${p}%`, height: "100%", background: "#22c55e" }} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
