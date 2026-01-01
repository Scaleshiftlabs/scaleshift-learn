import { useParams, Link } from "react-router-dom";

const ASSIGNMENTS = {
  1: {
    title: "Understand Digital Marketing Basics",
    instructions: [
      "Explain digital marketing in your own words.",
      "List 3 places where you see digital marketing daily.",
      "Why do businesses prefer digital marketing?"
    ],
    tips: ["Use simple English.", "Daily life examples are enough."]
  },
  2: {
    title: "Understand Digital Marketing Channels",
    instructions: [
      "List any 5 digital marketing channels.",
      "Explain organic vs paid channels.",
      "Which channel do you use most and why?"
    ],
    tips: ["Think as a user.", "Short answers are fine."]
  },
  3: {
    title: "Content Marketing Basics",
    instructions: [
      "What is content marketing? Explain simply.",
      "List 3 types of content you consume daily.",
      "Why is helpful content important for businesses?"
    ],
    tips: ["Think from user experience.", "No research needed."]
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
