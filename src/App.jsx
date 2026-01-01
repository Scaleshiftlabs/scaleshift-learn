import { Routes, Route } from "react-router-dom";
import { SignedOut, SignIn } from "@clerk/clerk-react";

import CourseHome from "./pages/course/CourseHome";
import Module from "./pages/course/modules/Module";
import Video from "./pages/course/modules/Video";
import Assignment from "./pages/course/modules/Assignment";
import Quiz from "./pages/course/modules/Quiz";

export default function App() {
  return (
    <Routes>
      {/* AUTH */}
      <Route
        path="/sign-in/*"
        element={
          <SignedOut>
            <SignIn routing="path" path="/sign-in" />
          </SignedOut>
        }
      />

      {/* COURSE */}
      <Route path="/course" element={<CourseHome />} />

      {/* MODULE ROUTES */}
      <Route path="/course/module/:id" element={<Module />} />
      <Route path="/course/module/:id/video/:vid" element={<Video />} />
      <Route path="/course/module/:id/assignment" element={<Assignment />} />
      <Route path="/course/module/:id/quiz" element={<Quiz />} />
    </Routes>
  );
}
