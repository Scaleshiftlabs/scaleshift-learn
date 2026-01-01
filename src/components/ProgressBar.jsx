import { getProgress } from "../utils/progress";

export default function ProgressBar() {
  const percent = getProgress("demo-module");

  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{
        height: "8px",
        background: "#e5e7eb",
        borderRadius: "6px",
        overflow: "hidden"
      }}>
        <div style={{
          width: percent + "%",
          height: "100%",
          background: "#2563eb"
        }} />
      </div>
      <small>{percent}% completed</small>
    </div>
  );
}
