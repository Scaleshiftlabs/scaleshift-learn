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
      <div className="glass card" style={{ maxWidth: 720, textAlign: "center" }}>
        <h1 style={{ fontSize: 48, marginBottom: 12 }}>ScaleShift Learn</h1>
        <p style={{ opacity: .8 }}>
          Learn digital marketing the modern, practical way.
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
  const [light, setLight] = useState(
    localStorage.getItem("theme") === "light"
  );

  useEffect(() => {
    const html = document.documentElement;
    if (light) {
      html.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  }, [light]);

  return (
    <>
      <div
        className="glass"
        style={{
          margin: 16,
          padding: "14px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Link to="/" style={{ fontWeight: 700 }}>ScaleShift</Link>
        <button onClick={() => setLight(!light)}>
          {light ? "Dark" : "Light"}
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
