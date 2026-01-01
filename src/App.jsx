import { Routes, Route, Link } from "react-router-dom";
import CourseHome from "./pages/course/CourseHome";
import Module from "./pages/course/modules/Module";
import Video from "./pages/course/modules/Video";
import Assignment from "./pages/course/modules/Assignment";
import Quiz from "./pages/course/modules/Quiz";
import Handouts from "./pages/course/modules/Handouts";

function Landing() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 700, padding: 32, textAlign: "center" }}>
        <h1 style={{ fontSize: 42, marginBottom: 12 }}>ScaleShift Learn</h1>
        <p style={{ fontSize: 18, opacity: 0.9 }}>
          Digital Marketing Foundations — beginner friendly, practical, simple English.
        </p>

        <div style={{ marginTop: 32 }}>
          <Link to="/course">
            <button>🚀 Start Learning</button>
          </Link>
        </div>

        <p style={{ marginTop: 24, fontSize: 14, opacity: 0.6 }}>
          No fluff. Real skills. Learn by doing.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/course" element={<CourseHome />} />
      <Route path="/course/module/:id" element={<Module />} />
      <Route path="/course/module/:id/video/:vid" element={<Video />} />
      <Route path="/course/module/:id/assignment" element={<Assignment />} />
      <Route path="/course/module/:id/quiz" element={<Quiz />} />
      <Route path="/course/module/:id/handouts" element={<Handouts />} />
    </Routes>
  );
}
