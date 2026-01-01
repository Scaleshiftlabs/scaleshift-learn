import { useParams, Link } from "react-router-dom";

const ASSIGNMENTS = {
  1: {
    title: "Understand Digital Marketing Basics",
    instructions: [
      "In your own words, explain what digital marketing means.",
      "List any 3 places where you have seen digital marketing (example: Google, Instagram, YouTube, websites).",
      "Explain why businesses prefer digital marketing over traditional methods."
    ],
    tips: [
      "Write in simple English.",
      "No need to search online.",
      "Use examples from your daily life."
    ]
  }
};

export default function Assignment() {
  const { id } = useParams();
  const assignment = ASSIGNMENTS[id];

  if (!assignment) {
    return (
      <div style={{ padding: 32, color: "white" }}>
        <p>No assignment found for this module.</p>
        <Link to={`/course/module/${id}`}>← Back to Module</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 32, color: "white", maxWidth: 900 }}>
      <h1>{assignment.title}</h1>

      <h3 style={{ marginTop: 24 }}>What you need to do:</h3>
      <ol>
        {assignment.instructions.map((item, index) => (
          <li key={index} style={{ marginBottom: 8 }}>{item}</li>
        ))}
      </ol>

      <h3 style={{ marginTop: 24 }}>Tips:</h3>
      <ul>
        {assignment.tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>

      <div style={{ marginTop: 40 }}>
        <Link to={`/course/module/${id}`}>← Back to Module</Link>
      </div>
    </div>
  );
}
