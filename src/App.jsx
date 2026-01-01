import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
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
        <h1 style={{ fontSize: 44 }}>ScaleShift Learn</h1>
        <p style={{ fontSize: 18, color: "var(--muted)" }}>
          Learn digital marketing the simple, practical way.
        </p>

        <div style={{ marginTop: 32 }}>
          <Link to="/course">
            <button>Start Learning</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.body.className = light ? "light" : "";
  }, [light]);

  return (
    <>
      {/* TOP BAR */}
      <div
        style={{
          padding: "12px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid var(--border)"
        }}
      >
        {/* LEFT: HOME */}
        <Link to="/" style={{ fontWeight: 700 }}>
          🏠 ScaleShift Learn
        </Link>

        {/* RIGHT: THEME TOGGLE */}
        <button onClick={() => setLight(!light)}>
          {light ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/course" element={<CourseHome />} />
        <Route path="/course/module/:id" element={<Module />} />
        <Route path="/course/module/:id/video/:vid" element={<Video />} />
        <Route path="/course/module/:id/assignment" element={<Assignment />} />
        <Route path="/course/module/:id/quiz" element={<Quiz />} />
        <Route path="/course/module/:id/handouts" element={<Handouts />} />
      </Routes>
    </>
  );
}
