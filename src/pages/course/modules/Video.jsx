import { useParams, Link } from "react-router-dom";

const VIDEO_MAP = {
  1: {
    1: { title: "What is Digital Marketing", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    2: { title: "Why Digital Marketing Matters", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
  },
  2: {
    1: { title: "Overview of Digital Channels", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    2: { title: "Organic vs Paid Channels", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
  },
  3: {
    1: { title: "What is Content Marketing", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    2: { title: "Types of Content", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
  },
  4: {
    1: { title: "Introduction to Online Ads", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    2: { title: "Google Ads vs Social Ads", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
  },
  5: {
    1: { title: "What is Digital Analytics", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    2: { title: "Key Metrics: Traffic, Leads, Sales", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
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
