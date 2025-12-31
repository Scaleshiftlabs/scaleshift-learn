import { useParams, useNavigate } from "react-router-dom";
import course from "../data/courseBB001.json";
import { setProgress, markCourseComplete } from "./studentProgress";
import { container, content, card, button, back } from "./layout";

export default function StudentDecision() {
  const { decisionId } = useParams();
  const navigate = useNavigate();

  const index = course.decisions.findIndex(d => d.id === decisionId);
  const decision = course.decisions[index];
  const next = course.decisions[index + 1];

  return (
    <div style={container}>
      <div style={content}>
        <button style={back} onClick={() => navigate("/student/home")}>
          ← Home
        </button>

        <h1>Decision {decision.id}</h1>
        <h2>{decision.title}</h2>

        <div style={card}>
          <h3>Lessons</h3>
          {[1,2,3].map(n => (
            <p
              key={n}
              style={{ cursor: "pointer", marginBottom: "10px" }}
              onClick={() => navigate(`/student/lesson/${decision.id}/${n}`)}
            >
              Lesson {n}
            </p>
          ))}
        </div>

        <div style={card}>
          <h3>Assignment</h3>
          <button
            style={button}
            onClick={() => {
              if (next) {
                setProgress(next.id);
                navigate("/student/home");
              } else {
                markCourseComplete();
                navigate("/student/capstone");
              }
            }}
          >
            Submit Assignment
          </button>
        </div>
      </div>
    </div>
  );
}
