import { useParams, Link } from "react-router-dom";

const ASSIGNMENTS = {
  1: [
    "Explain digital marketing in your own words.",
    "List 3 examples you see daily (apps, ads, websites)."
  ],
  2: [
    "List 5 digital marketing channels.",
    "Explain the difference between organic and paid."
  ],
  3: [
    "What is content marketing?",
    "Write 3 content ideas for a small business."
  ],
  4: [
    "What are paid ads?",
    "Name 2 platforms where ads are shown."
  ],
  5: [
    "What is analytics?",
    "List 3 metrics you would track."
  ],
  6: [
    "Create a simple digital marketing plan for any business."
  ]
};

export default function Assignment() {
  const { id } = useParams();
  const tasks = ASSIGNMENTS[id];

  if (!tasks) {
    return <div style={{ padding: 32 }}>No assignment available</div>;
  }

  return (
    <div style={{ padding: 32, maxWidth: 700, margin: "0 auto" }}>
      <h1>Assignment</h1>
      <p style={{ opacity: 0.8 }}>
        Try to write answers in your own words. Keep it simple.
      </p>

      <div style={{ marginTop: 24 }}>
        {tasks.map((t, i) => (
          <div
            key={i}
            style={{
              padding: 16,
              marginBottom: 12,
              borderRadius: 10,
              background: "#020617",
              border: "1px solid #1e293b"
            }}
          >
            <strong>Task {i + 1}</strong>
            <p style={{ marginTop: 8 }}>{t}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 32 }}>
        <Link to={`/course/module/${id}`}>← Back to Module</Link>
      </div>
    </div>
  );
}
