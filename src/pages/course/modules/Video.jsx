import { useParams } from "react-router-dom";

export default function Video() {
  const { id, vid } = useParams();

  return (
    <div style={{ padding: 24, color: "white" }}>
      <h2>Module {id} — Video {vid}</h2>
      <div style={{ marginTop: 16 }}>
        <video width="100%" controls>
          <source src="/sample.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
