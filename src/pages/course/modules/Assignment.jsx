import { useParams, Link } from "react-router-dom";

const ASSIGNMENTS = {
  1: ["What is digital marketing?", "Give 3 examples"],
  2: ["List 5 channels", "Organic vs Paid"],
  3: ["What is content marketing?", "3 content types"],
  4: ["What are paid ads?", "2 ad platforms"],
  5: ["What is analytics?", "Name 3 metrics"],
  6: ["Create a simple digital marketing plan"]
};

export default function Assignment() {
  const { id } = useParams();
  const data = ASSIGNMENTS[id];

  if (!data) {
    return <div style={{ padding: 32, color: "white" }}>No assignment</div>;
  }

  return (
    <div style={{ padding: 32, color: "white" }}>
      <h1>Assignment</h1>
      <ol>
        {data.map((q, i) => <li key={i}>{q}</li>)}
      </ol>
      <Link to={`/course/module/${id}`}>← Back to Module</Link>
    </div>
  );
}
