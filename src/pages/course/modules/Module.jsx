import { useParams } from "react-router-dom";

export default function Module() {
  const { id } = useParams();

  return (
    <div style={{ padding: 24, color: "white" }}>
      <h2>Module {id}</h2>
      <p>Videos • Assignment • Quiz • Handouts</p>

      <ul>
        <li>Video 1</li>
        <li>Video 2</li>
        <li>Assignment</li>
        <li>Quiz</li>
      </ul>
    </div>
  );
}
