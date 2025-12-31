export default function KanbanCard({ title, desc }) {
  return (
    <div style={{
      background: "#11162a",
      border: "1px solid #1e2440",
      borderRadius: "8px",
      padding: "12px",
      marginBottom: "10px"
    }}>
      <div style={{ fontWeight: 600, marginBottom: "6px" }}>
        {title}
      </div>
      <div style={{ fontSize: "12px", opacity: 0.7 }}>
        {desc}
      </div>
    </div>
  )
}
