import { Link } from "react-router-dom";

export default function CourseHome() {
  return (
    <div style={{ padding: 32, color: "white", maxWidth: 900 }}>
      <h1>Digital Marketing Foundations</h1>
      <p style={{ marginBottom: 24 }}>
        Beginner-friendly. Simple English. Practical examples.
      </p>

      <ol style={{ lineHeight: "2" }}>
        <li>
          <Link to="/course/module/1">Module 1: Basics</Link>
        </li>
        <li>
          <Link to="/course/module/2">Module 2: Channels</Link>
        </li>
        <li>
          <Link to="/course/module/3">Module 3: Content</Link>
        </li>
        <li>
          <Link to="/course/module/4">Module 4: Ads</Link>
        </li>
        <li>
          <Link to="/course/module/5">Module 5: Analytics</Link>
        </li>
        <li>
          <Link to="/course/module/6">Module 6: Projects</Link>
        </li>
      </ol>
    </div>
  );
}
