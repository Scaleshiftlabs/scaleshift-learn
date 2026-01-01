import { useParams, Link } from "react-router-dom";

const HANDOUTS = {
  4: {
    title: "Paid Advertising — Handouts",
    files: [
      { name: "Intro to Online Ads (PDF)", url: "/handouts/module4-ads.pdf" }
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
    <div style={{ padding: 32, color: "white" }}>
      <h1>{data.title}</h1>

      <ul>
        {data.files.map((f, i) => (
          <li key={i}>
            <a href={f.url} download>{f.name}</a>
          </li>
        ))}
      </ul>

      <Link to={`/course/module/${id}`}>← Back to Module</Link>
    </div>
  );
}
