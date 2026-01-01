import { useParams, Link } from "react-router-dom";

/**
 * Working video (YouTube test video)
 * jNQXAC9IVRw = Me at the zoo (always available)
 */
const WORKING_VIDEO = "https://www.youtube.com/embed/jNQXAC9IVRw";

export default function Video() {
  const { id, vid } = useParams();

  return (
    <div style={{ padding: 32, maxWidth: 900, margin: "0 auto" }}>
      <h1>Module {id} — Video {vid}</h1>

      <div
        style={{
          marginTop: 20,
          borderRadius: 12,
          overflow: "hidden",
          border: "1px solid #1e293b",
          background: "#000"
        }}
      >
        <iframe
          width="100%"
          height="420"
          src={WORKING_VIDEO}
          title="Course Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div
        style={{
          marginTop: 24,
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <Link to={`/course/module/${id}`}>← Back to Module</Link>
        <Link to={`/course/module/${id}/video/${Number(vid) + 1}`}>
          Next Video →
        </Link>
      </div>
    </div>
  );
}
