import { getProgress } from "../utils/progress";

const items = [
  { id: "video", label: "Video" },
  { id: "assignment", label: "Assignment" },
  { id: "quiz", label: "Quiz" },
  { id: "handout", label: "Handout" }
];

export default function CourseSidebar({ moduleId, active, onSelect }) {
  const percent = getProgress(moduleId);

  return (
    <div className="glass" style={{ width: "220px" }}>
      <h3>Course</h3>

      {items.map(item => (
        <div
          key={item.id}
          onClick={() => onSelect(item.id)}
          style={{
            padding: "10px",
            marginTop: "6px",
            borderRadius: "8px",
            cursor: "pointer",
            background: active === item.id ? "#e0e7ff" : "transparent"
          }}
        >
          {item.label}
          {percent >= (items.indexOf(item) + 1) * 25 && " ✔"}
        </div>
      ))}

      <p style={{ marginTop: "20px" }}>{percent}% completed</p>
    </div>
  );
}
