import { useNavigate, useParams } from "react-router-dom";

export default function StudentQuiz() {
  const navigate = useNavigate();
  const { decisionId } = useParams();

  return (
    <div style={page}>
      <h1>Quick Check</h1>
      <p>Answer to unlock assignment</p>

      <div style={card}>
        <p>Which option best represents clarity?</p>

        <button style={option}>Having many ideas</button>
        <button style={option}>Clear next action</button>
        <button style={option}>More tools</button>
      </div>

      <button
        style={button}
        onClick={() => navigate(`/student/decision/${decisionId}`)}
      >
        Submit Quiz
      </button>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  background: "#020617",
  color: "white",
  padding: "40px"
};

const card = {
  border: "1px solid #1e293b",
  padding: "24px",
  borderRadius: "12px",
  maxWidth: "600px",
  marginTop: "24px"
};

const option = {
  display: "block",
  width: "100%",
  marginTop: "12px",
  padding: "12px",
  background: "#020617",
  color: "white",
  border: "1px solid #1e293b",
  borderRadius: "8px",
  cursor: "pointer"
};

const button = {
  marginTop: "24px",
  padding: "12px 24px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer"
};
