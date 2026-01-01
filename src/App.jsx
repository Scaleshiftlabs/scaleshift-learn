import { Routes, Route, Navigate } from "react-router-dom";
import CourseHome from "./pages/course/CourseHome";
import Module from "./pages/course/modules/Module";
import Video from "./pages/course/modules/Video";
import Assignment from "./pages/course/modules/Assignment";
import Quiz from "./pages/course/modules/Quiz";
import Handouts from "./pages/course/modules/Handouts";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/course" replace />} />

      <Route path="/course" element={<CourseHome />} />
      <Route path="/course/module/:id" element={<Module />} />
      <Route path="/course/module/:id/video/:vid" element={<Video />} />
      <Route path="/course/module/:id/assignment" element={<Assignment />} />
      <Route path="/course/module/:id/quiz" element={<Quiz />} />
      <Route path="/course/module/:id/handouts" element={<Handouts />} />

      <Route path="*" element={<Navigate to="/course" replace />} />
    </Routes>
  );
}
