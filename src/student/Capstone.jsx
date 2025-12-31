import { useNavigate } from "react-router-dom";
import { container, content, card, button, back } from "./layout";

export default function Capstone() {
  const navigate = useNavigate();

  return (
    <div style={container}>
      <div style={content}>
        <button style={back} onClick={() => navigate("/student/home")}>
          ← Home
        </button>

        <h1>Capstone</h1>

        <div style={card}>
          <ul>
            <li>✔ Problem Statement</li>
            <li>✔ Offer</li>
            <li>✔ Growth Map</li>
            <li>✔ Experiment Plan</li>
            <li>✔ System Map</li>
          </ul>
        </div>

        <button style={{ ...button, background: "#16a34a" }}>
          Generate Certificate
        </button>
      </div>
    </div>
  );
}
