import { useParams, Link } from "react-router-dom";

/**
 * TEMP WORKING VIDEO (placeholder)
 * Replace per video later
 */
const WORKING_VIDEO = "https://www.youtube.com/embed/jNQXAC9IVRw";

/**
 * PER-MODULE VIDEO COUNTS
 * Adjust anytime without UI changes
 */
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

  const total = MODULE_VIDEO_COUNT[moduleId] || 1;

  // Guard invalid numbers
  if (videoNum < 1 || videoNum > total) {
    return (
      <div style={{ padding: 32 }}>
        <p>Video not found.</p>
        <Link to={`/course/module/${moduleId}`}>← Back to Module</Link>
      </div>
    );
  }

  const hasPrev = videoNum > 1;
  const hasNext = videoNum < total;

  return (
    <div style={{ padding: 32, maxWidth: 900, margin: "0 auto" }}>
      <h1>
        Module {moduleId} — Video {videoNum} of {total}
      </h1>

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
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        {hasPrev ? (
          <Link to={`/course/module/${moduleId}/video/${videoNum - 1}`}>
            ← Previous
          </Link>
        ) : (
          <span style={{ opacity: 0.4 }}>← Previous</span>
        )}

        <Link to={`/course/module/${moduleId}`}>Back to Module</Link>

        {hasNext ? (
          <Link to={`/course/module/${moduleId}/video/${videoNum + 1}`}>
            Next →
          </Link>
        ) : (
          <span style={{ opacity: 0.4 }}>Next →</span>
        )}
      </div>
    </div>
  );
}
