import { Routes, Route, Navigate } from "react-router-dom";
import { SignedOut, SignIn } from "@clerk/clerk-react";
import CourseHome from "./pages/course/CourseHome";
import Module from "./pages/course/modules/Module";
import Video from "./pages/course/modules/Video";

export default function App() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Navigate to="/course" replace />} />

      {/* Auth */}
      <Route
        path="/sign-in/*"
        element={<SignedOut><SignIn routing="path" path="/sign-in" /></SignedOut>}
      />

      {/* Course (PUBLIC for now) */}
      <Route path="/course" element={<CourseHome />} />
      <Route path="/course/module/:id" element={<Module />} />
      <Route path="/course/module/:id/video/:vid" element={<Video />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/course" replace />} />
    </Routes>
  );
}
