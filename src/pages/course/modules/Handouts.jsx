import { useParams, Link } from "react-router-dom";

const HANDOUTS = {
  1: ["Basics.pdf"],
  2: ["Channels.pdf"],
  3: ["Content.pdf"],
  4: ["Ads.pdf"],
  5: ["Analytics.pdf"],
  6: ["Project.pdf"]
};

export default function Handouts() {
  const { id } = useParams();
  const h = HANDOUTS[id];

  if (!h) {
    return (
      <div style={{ padding: 32, color: "white" }}>
        <p>No handouts available.</p>
        <Link to={`/course/module/${id}`}>← Back to Module</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 32, color: "white" }}>
      <h1>Handouts</h1>
      <ul>{h.map((f, i) => <li key={i}>{f}</li>)}</ul>
      <Link to={`/course/module/${id}`}>← Back to Module</Link>
    </div>
  );
}
