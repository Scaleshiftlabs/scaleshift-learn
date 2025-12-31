import { useParams, useNavigate } from "react-router-dom";
import { container, content, card, button, back } from "./layout";

export default function StudentLesson() {
  const { decisionId, lessonId } = useParams();
  const navigate = useNavigate();

  return (
    <div style={container}>
      <div style={content}>
        <button style={back} onClick={() => navigate("/student/home")}>
          ← Home
        </button>

        <h1>Decision {decisionId}</h1>
        <h2>Lesson {lessonId}</h2>

        <div style={{ ...card, height: "200px", background: "black" }}>
          <p style={{ opacity: 0.6, textAlign: "center" }}>
            Video plays here
          </p>
        </div>

        <div style={card}>
          <h3>Key Takeaways</h3>
          <ul>
            <li>Takeaway 1</li>
            <li>Takeaway 2</li>
            <li>Takeaway 3</li>
          </ul>
        </div>

        <button style={button} onClick={() => navigate(-1)}>
          Mark Lesson Complete
        </button>
      </div>
    </div>
  );
}
