import { useParams, Link } from "react-router-dom";

const HANDOUTS = {
  1: {
    title: "Digital Marketing Basics — Handouts",
    files: [
      {
        name: "What is Digital Marketing (PDF)",
        url: "/handouts/module1-digital-marketing-basics.pdf"
      },
      {
        name: "Key Terms Explained (PDF)",
        url: "/handouts/module1-key-terms.pdf"
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
        <p>No handouts available for this module.</p>
        <Link to={`/course/module/${id}`}>← Back to Module</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 32, color: "white", maxWidth: 900 }}>
      <h1>{data.title}</h1>

      <ul style={{ marginTop: 24 }}>
        {data.files.map((f, i) => (
          <li key={i} style={{ marginBottom: 8 }}>
            <a href={f.url} style={{ color: "#38bdf8" }} download>
              ⬇ {f.name}
            </a>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 40 }}>
        <Link to={`/course/module/${id}`}>← Back to Module</Link>
      </div>
    </div>
  );
}
