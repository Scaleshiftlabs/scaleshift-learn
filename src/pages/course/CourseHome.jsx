import { Link } from "react-router-dom";

export default function CourseHome() {
  return (
    <div style={{ padding: 32, color: "white" }}>
      <h1>Digital Marketing Foundations</h1>
      <p>Beginner-friendly. Simple English. Practical examples.</p>

      <ul>
        <li><Link to="/course/module/1">Module 1</Link></li>
        <li><Link to="/course/module/2">Module 2</Link></li>
        <li><Link to="/course/module/3">Module 3</Link></li>
        <li><Link to="/course/module/4">Module 4</Link></li>
        <li><Link to="/course/module/5">Module 5</Link></li>
        <li><Link to="/course/module/6">Module 6</Link></li>
      </ul>
    </div>
  );
}
