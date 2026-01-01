import { Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";
import CourseHome from "./pages/course/CourseHome";
import Module from "./pages/course/modules/Module";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/course" replace />} />

      <Route path="/sign-in/*" element={<SignedOut><SignIn routing="path" path="/sign-in" /></SignedOut>} />

      <Route path="/course" element={<CourseHome />} />
      <Route path="/course/module/:id" element={<SignedIn><Module /></SignedIn>} />

      <Route path="*" element={<Navigate to="/course" replace />} />
    </Routes>
  );
}
