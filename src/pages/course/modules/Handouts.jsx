import { useParams, Link } from "react-router-dom";

const HANDOUTS = {
  2: {
    title: "Marketing Channels — Handouts",
    files: [
      {
        name: "Channels Overview",
        url: "/handouts/channels.txt"
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

      <ul style={{ marginTop: 16 }}>
        {data.files.map((f, i) => (
          <li key={i} style={{ marginBottom: 8 }}>
            <a
              href={f.url}
              download
              style={{ color: "#38bdf8" }}
            >
              ⬇ Download {f.name}
            </a>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 32 }}>
        <Link to={`/course/module/${id}`}>← Back to Module</Link>
      </div>
    </div>
  );
}
