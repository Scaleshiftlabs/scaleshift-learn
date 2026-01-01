import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f172a",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "28px",
      fontWeight: "bold"
    }}>
      <Routes>
        <Route path="/" element={<div>✅ HOME OK — ROUTING WORKS</div>} />
        <Route path="*" element={<div>❌ NO ROUTE MATCHED</div>} />
      </Routes>
    </div>
  );
}
