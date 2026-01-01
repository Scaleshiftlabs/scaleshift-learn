import { Routes, Route } from "react-router-dom";

import CourseHome from "./pages/course/CourseHome";
import Module from "./pages/course/modules/Module";
import Video from "./pages/course/modules/Video";
import Assignment from "./pages/course/modules/Assignment";
import Quiz from "./pages/course/modules/Quiz";

export default function App() {
  return (
    <Routes>
      <Route path="/course" element={<CourseHome />} />

      <Route path="/course/module/:id" element={<Module />}>
        <Route path="video/:vid" element={<Video />} />
        <Route path="assignment" element={<Assignment />} />
        <Route path="quiz" element={<Quiz />} />
      </Route>
    </Routes>
  );
}
