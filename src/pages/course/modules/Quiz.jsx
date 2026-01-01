import { useParams, Link } from "react-router-dom";

const QUIZZES = {
  1: ["What is digital marketing?"],
  2: ["Which is a digital channel?"],
  3: ["What is content marketing?"],
  4: ["What are paid ads?"],
  5: ["What does analytics measure?"],
  6: ["What is the first step in a project?"]
};

export default function Quiz() {
  const { id } = useParams();
  const q = QUIZZES[id];

  if (!q) {
    return (
      <div style={{ padding: 32, color: "white" }}>
        <p>No quiz found.</p>
        <Link to={`/course/module/${id}`}>← Back to Module</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 32, color: "white" }}>
      <h1>Quiz</h1>
      <ul>{q.map((x, i) => <li key={i}>{x}</li>)}</ul>
      <Link to={`/course/module/${id}`}>← Back to Module</Link>
    </div>
  );
}
