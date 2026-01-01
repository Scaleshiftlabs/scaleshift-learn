import { useParams, Link } from "react-router-dom";

const HANDOUTS = {
  2: {
    title: "Marketing Channels — Handouts",
    files: [
      {
        name: "Channels Overview (PDF)",
        url: "/handouts/channels.pdf"
      }
    ]
  }
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
    <div style={{ padding: 32, color: "white", maxWidth: 800 }}>
      <h1>{data.title}</h1>

      <ul>
        {data.files.map((f, i) => (
          <li key={i}>
            <a href={f.url} download>⬇ Download {f.name}</a>
          </li>
        ))}
      </ul>

      <Link to={`/course/module/${id}`}>← Back to Module</Link>
    </div>
  );
}
