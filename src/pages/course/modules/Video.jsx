import { useParams, Link } from "react-router-dom";
import { markDone } from "../../../utils/progress";

const WORKING_VIDEO = "https://www.youtube.com/embed/jNQXAC9IVRw";

const MODULE_VIDEO_COUNT = {
  1: 6,
  2: 8,
  3: 6,
  4: 7,
  5: 6,
  6: 5
};

export default function Video() {
  const { id, vid } = useParams();
  const moduleId = Number(id);
  const videoNum = Number(vid);

  markDone(moduleId, "video");

  const total = MODULE_VIDEO_COUNT[moduleId] || 1;

  if (videoNum < 1 || videoNum > total) {
    return (
      <div style={{ padding: 32 }}>
        <p>Video not found.</p>
        <Link to={`/course/module/${moduleId}`}>← Back</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 32, maxWidth: 900, margin: "0 auto" }}>
      <h2>Module {moduleId} · Video {videoNum}/{total}</h2>

      <iframe
        width="100%"
        height="420"
        src={WORKING_VIDEO}
        title="Video"
        allowFullScreen
      />

      <div style={{ marginTop: 24, display: "flex", justifyContent: "space-between" }}>
        {videoNum > 1
          ? <Link to={`/course/module/${moduleId}/video/${videoNum - 1}`}>← Previous</Link>
          : <span />}

        <Link to={`/course/module/${moduleId}`}>Back to Module</Link>

        {videoNum < total
          ? <Link to={`/course/module/${moduleId}/video/${videoNum + 1}`}>Next →</Link>
          : <span />}
      </div>
    </div>
  );
}
