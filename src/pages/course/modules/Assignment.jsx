import { useParams, Link } from "react-router-dom";

const ASSIGNMENTS = {
  1: { title: "Digital Marketing Basics", instructions: ["Explain digital marketing.", "Give 3 examples.", "Why is it useful?" ] },
  2: { title: "Marketing Channels", instructions: ["List 5 channels.", "Organic vs Paid.", "Which do you use most?" ] },
  3: { title: "Content Marketing", instructions: ["What is content marketing?", "3 content types.", "Why content matters?" ] },
  4: { title: "Paid Advertising", instructions: ["What are ads?", "2 ad platforms.", "Why ads are important?" ] },
  5: { title: "Analytics Basics", instructions: ["What is analytics?", "3 metrics.", "Why tracking matters?" ] },
  6: { title: "Final Project", instructions: ["Choose a product.", "Define audience.", "Choose channels.", "Explain measurement." ] }
};

export default function Assignment() {
  const { id } = useParams();
  const a = ASSIGNMENTS[id];

  if (!a) {
    return (
      <div style={{ padding: 32, color: "white" }}>
        <p>No assignment found.</p>
        <Link to={`/course/module/${id}`}>← Back to Module</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 32, color: "white" }}>
      <h1>{a.title}</h1>
      <ol>{a.instructions.map((i, idx) => <li key={idx}>{i}</li>)}</ol>
      <Link to={`/course/module/${id}`}>← Back to Module</Link>
    </div>
  );
}
