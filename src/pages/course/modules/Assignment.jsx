import { useParams, Link } from "react-router-dom";

const ASSIGNMENTS = {
  6: {
    title: "Final Project — Digital Marketing Plan",
    instructions: [
      "Choose any product or service (real or imaginary).",
      "Define your target audience (age, interest, location).",
      "Choose 3 digital channels to promote it.",
      "Explain what content you will create for each channel.",
      "Explain how you will measure success."
    ],
    tips: [
      "No right or wrong answers.",
      "Think practically, not theoretically.",
      "This project proves your learning."
    ]
  }
};

export default function Assignment() {
  const { id } = useParams();
  const assignment = ASSIGNMENTS[id];

  if (!assignment) {
    return (
      <div style={{ padding: 32, color: "white" }}>
        <p>No assignment found.</p>
        <Link to={`/course/module/${id}`}>← Back to Module</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 32, color: "white", maxWidth: 900 }}>
      <h1>{assignment.title}</h1>

      <h3>Project Steps:</h3>
      <ol>
        {assignment.instructions.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>

      <h3>Tips:</h3>
      <ul>
        {assignment.tips.map((tip, i) => (
          <li key={i}>{tip}</li>
        ))}
      </ul>

      <Link to={`/course/module/${id}`}>← Back to Module</Link>
    </div>
  );
}
