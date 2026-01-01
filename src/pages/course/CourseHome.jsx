import { Link } from "react-router-dom";

export default function CourseHome() {
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
      <h1>Digital Marketing Foundations</h1>
      <p>Beginner-friendly. Simple English. Practical examples.</p>

      <ul style={{ marginTop: 24, lineHeight: "2" }}>
        <li>
          <Link to="/course/module/1" style={{ color: "#38bdf8" }}>
            Module 1: Basics
          </Link>
        </li>
        <li>
          <Link to="/course/module/2" style={{ color: "#38bdf8" }}>
            Module 2: Channels
          </Link>
        </li>
        <li>
          <Link to="/course/module/3" style={{ color: "#38bdf8" }}>
            Module 3: Content
          </Link>
        </li>
        <li>
          <Link to="/course/module/4" style={{ color: "#38bdf8" }}>
            Module 4: Ads
          </Link>
        </li>
        <li>
          <Link to="/course/module/5" style={{ color: "#38bdf8" }}>
            Module 5: Analytics
          </Link>
        </li>
        <li>
          <Link to="/course/module/6" style={{ color: "#38bdf8" }}>
            Module 6: Projects
          </Link>
        </li>
      </ul>
    </div>
  );
}
