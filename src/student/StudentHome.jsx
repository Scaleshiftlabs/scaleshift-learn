import { useNavigate } from "react-router-dom";
import course from "../data/courseBB001.json";
import { getProgress } from "./studentProgress";
import { container, content, card, button } from "./layout";

export default function StudentHome() {
  const navigate = useNavigate();
  const progress = getProgress();

  return (
    <div style={container}>
      <div style={content}>
        <h1>{course.title}</h1>

        <div style={card}>
          {progress.completed ? (
            <>
              <h2>🎉 Course Completed</h2>
              <button
                style={button}
                onClick={() => navigate("/student/capstone")}
              >
                View Capstone
              </button>
            </>
          ) : (
            <>
              <p style={{ opacity: 0.7 }}>Continue learning</p>
              <h2>Decision {progress.currentDecision}</h2>

              <button
                style={button}
                onClick={() =>
                  navigate(`/student/decision/${progress.currentDecision}`)
                }
              >
                Continue
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
