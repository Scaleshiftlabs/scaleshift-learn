import { useParams, Link } from "react-router-dom";

const ASSIGNMENTS = {
  1: {
    title: "Understand Digital Marketing Basics",
    instructions: [
      "Explain digital marketing in your own words.",
      "List 3 places where you see digital marketing daily.",
      "Why do businesses prefer digital marketing?"
    ],
    tips: ["Use simple English."]
  },
  2: {
    title: "Understand Digital Marketing Channels",
    instructions: [
      "List 5 digital marketing channels.",
      "Explain organic vs paid channels.",
      "Which channel do you use most and why?"
    ],
    tips: ["Think as a user."]
  },
  3: {
    title: "Content Marketing Basics",
    instructions: [
      "What is content marketing?",
      "List 3 types of content you consume.",
      "Why is content important?"
    ],
    tips: ["No research needed."]
  },
  4: {
    title: "Paid Advertising Basics",
    instructions: [
      "What are online ads?",
      "Name 2 platforms where ads are shown.",
      "Why do businesses run paid ads?"
    ],
    tips: ["Think from business point of view."]
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

      <ol>
        {assignment.instructions.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>

      <ul>
        {assignment.tips.map((tip, i) => (
          <li key={i}>{tip}</li>
        ))}
      </ul>

      <Link to={`/course/module/${id}`}>← Back to Module</Link>
    </div>
  );
}
