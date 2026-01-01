import { useParams, Link } from "react-router-dom";

export default function Module() {
  const { id } = useParams();

  return (
    <div style={{ padding: 32, color: "white" }}>
      <h1>Module {id}</h1>
      <p>Videos • Assignment • Quiz • Handouts</p>

      <ul>
        <li><Link to={`/course/module/${id}/video/1`}>▶ Video 1</Link></li>
        <li><Link to={`/course/module/${id}/video/2`}>▶ Video 2</Link></li>
        <li><Link to={`/course/module/${id}/assignment`}>📝 Assignment</Link></li>
        <li><Link to={`/course/module/${id}/quiz`}>❓ Quiz</Link></li>
        <li><Link to={`/course/module/${id}/handouts`}>📄 Handouts</Link></li>
      </ul>

      <p><Link to="/course">← Back to Course</Link></p>
    </div>
  );
}
