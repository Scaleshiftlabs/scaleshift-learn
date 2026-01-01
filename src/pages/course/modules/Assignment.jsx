import { useParams, Link } from "react-router-dom";
import { markDone } from "../../../utils/progress";

const ASSIGNMENTS = {
  1: ["What is digital marketing?", "Give 3 examples"],
  2: ["List 5 channels", "Organic vs Paid"],
  3: ["Write a sample post"],
  4: ["Create an ad idea"],
  5: ["Explain CTR"],
  6: ["Final project outline"]
};

export default function Assignment() {
  const { id } = useParams();
  markDone(id, "assignment");

  return (
    <div style={{ padding: 32 }}>
      <h2>Module {id} · Assignment</h2>

      <ul>
        {(ASSIGNMENTS[id] || []).map((q, i) => (
          <li key={i}>{q}</li>
        ))}
      </ul>

      <Link to={`/course/module/${id}`}>← Back to Module</Link>
    </div>
  );
}
