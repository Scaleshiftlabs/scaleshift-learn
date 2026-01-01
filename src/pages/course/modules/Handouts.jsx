import { useParams, Link } from "react-router-dom";
import { markDone } from "../../../utils/progress";

export default function Handouts() {
  const { id } = useParams();
  markDone(id, "handout");

  return (
    <div style={{ padding: 32 }}>
      <h2>Module {id} · Handouts</h2>

      <a href={`/handouts/module${id}.pdf`} download>
        Download PDF
      </a>

      <br /><br />
      <Link to={`/course/module/${id}`}>← Back to Module</Link>
    </div>
  );
}
