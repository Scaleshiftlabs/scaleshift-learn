export default function StatCard({ title, value, hint }) {
  return (
    <div style={{
      background: "#11162a",
      border: "1px solid #1e2440",
      borderRadius: "10px",
      padding: "16px",
      minWidth: "220px"
    }}>
      <div style={{ opacity: 0.7, fontSize: "12px", marginBottom: "8px" }}>
        {title}
      </div>
      <div style={{ fontSize: "28px", fontWeight: 600 }}>
        {value}
      </div>
      {hint && (
        <div style={{ opacity: 0.6, fontSize: "12px", marginTop: "6px" }}>
          {hint}
        </div>
      )}
    </div>
  )
}
