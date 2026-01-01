import { Routes, Route } from "react-router-dom";
import CourseHome from "./pages/course/CourseHome";
import Module from "./pages/course/modules/Module";
import Video from "./pages/course/modules/Video";
import Assignment from "./pages/course/modules/Assignment";
import Quiz from "./pages/course/modules/Quiz";
import Handouts from "./pages/course/modules/Handouts";

function Landing() {
  return (
    <div style={{ padding: 32, color: "white" }}>
      <h1>ScaleShift Learn</h1>
      <p>Digital Marketing Foundations</p>
      <a href="/course">👉 Go to Course</a>
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
