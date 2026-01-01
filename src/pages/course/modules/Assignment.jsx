import { useParams, Link } from "react-router-dom";

const ASSIGNMENTS = {
  1: {
    title: "Understand Digital Marketing Basics",
    instructions: [
      "Explain digital marketing in your own words.",
      "List 3 places where you see digital marketing daily.",
      "Why do businesses prefer digital marketing?"
    ],
    tips: ["Use simple English.", "No need to search online.", "Use daily life examples."]
  },
  2: {
    title: "Understand Digital Marketing Channels",
    instructions: [
      "List any 5 digital marketing channels you know.",
      "Explain the difference between organic and paid channels.",
      "Mention one channel you personally use the most and why."
    ],
    tips: ["Think from user point of view.", "Simple answers are enough."]
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

      <h3 style={{ marginTop: 24 }}>What you need to do:</h3>
      <ol>
        {assignment.instructions.map((item, i) => (
          <li key={i} style={{ marginBottom: 8 }}>{item}</li>
        ))}
      </ol>

      <h3 style={{ marginTop: 24 }}>Tips:</h3>
      <ul>
        {assignment.tips.map((tip, i) => (
          <li key={i}>{tip}</li>
        ))}
      </ul>

      <div style={{ marginTop: 40 }}>
        <Link to={`/course/module/${id}`}>← Back to Module</Link>
      </div>
    </div>
  );
}
