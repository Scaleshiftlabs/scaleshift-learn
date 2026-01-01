import { Link } from "react-router-dom";

export default function CourseHome() {
  return (
    <div style={{ padding: 32, color: "white" }}>
      <h1>Digital Marketing Foundations</h1>
      <p>Beginner friendly · Practical · Simple English</p>

      <ul>
        {[1,2,3,4,5,6].map(i => (
          <li key={i}>
            <Link to={`/course/module/${i}`}>Module {i}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
