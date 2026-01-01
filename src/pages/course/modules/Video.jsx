import { useParams, Link } from "react-router-dom";

const VIDEO_MAP = {
  6: {
    1: { title: "How to Plan a Digital Marketing Project", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    2: { title: "Executing & Improving Your Campaign", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
  }
};

export default function Video() {
  const { id, vid } = useParams();
  const video = VIDEO_MAP[id]?.[vid];

  if (!video) {
    return (
      <div style={{ padding: 32, color: "white" }}>
        <p>Video not found.</p>
        <Link to={`/course/module/${id}`}>← Back to Module</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 32, color: "white", maxWidth: 900 }}>
      <h1>{video.title}</h1>
      <div style={{ marginTop: 20 }}>
        <iframe
          width="100%"
          height="420"
          src={video.url}
          title={video.title}
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <div style={{ marginTop: 30 }}>
        <Link to={`/course/module/${id}`}>← Back to Module</Link>
      </div>
    </div>
  );
}
