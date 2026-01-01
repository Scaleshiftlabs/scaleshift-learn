import { useParams, Link } from "react-router-dom";

export default function Quiz() {
  const { id } = useParams();

  return (
    <div style={{ padding: 32, color: "white" }}>
      <h1>Module {id} – Quiz</h1>
      <p>This is quiz page.</p>
      <Link to={`/course/module/${id}`}>← Back to Module</Link>
    </div>
  );
}
