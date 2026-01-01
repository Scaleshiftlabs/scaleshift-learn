import { useParams, Link } from "react-router-dom";

const HANDOUTS = {
  1: { title: "Basics — Handouts", files: [{ name: "Basics Notes (PDF)", url: "/handouts/module1-basics.pdf" }] },
  2: { title: "Channels — Handouts", files: [{ name: "Channels Overview (PDF)", url: "/handouts/module2-channels.pdf" }] },
  3: { title: "Content Marketing — Handouts", files: [{ name: "Content Types & Tips (PDF)", url: "/handouts/module3-content.pdf" }] }
};

export default function Handouts() {
  const { id } = useParams();
  const data = HANDOUTS[id];

  if (!data) {
    return (
      <div style={{ padding: 32, color: "white" }}>
        <p>No handouts available.</p>
        <Link to={`/course/module/${id}`}>← Back to Module</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 32, color: "white", maxWidth: 900 }}>
      <h1>{data.title}</h1>

      <ul style={{ marginTop: 24 }}>
        {data.files.map((f, i) => (
          <li key={i}>
            <a href={f.url} style={{ color: "#38bdf8" }} download>⬇ {f.name}</a>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 40 }}>
        <Link to={`/course/module/${id}`}>← Back to Module</Link>
      </div>
    </div>
  );
}
