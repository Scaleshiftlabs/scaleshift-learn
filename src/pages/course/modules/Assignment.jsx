import { useParams, Link } from "react-router-dom";

export default function Assignment() {
  const { id } = useParams();

  return (
    <div style={{ padding: 32, color: "white" }}>
      <h1>Module {id} – Assignment</h1>
      <p>This is assignment page.</p>
      <Link to={`/course/module/${id}`}>← Back to Module</Link>
    </div>
  );
}
