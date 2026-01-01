import { Routes, Route } from "react-router-dom";
import StudentCourseList from "./CourseList";
import CourseView from "./CourseView";
import LessonView from "./LessonView";
import Certificate from "./Certificate";

export default function StudentDashboard() {
  return (
    <Routes>
      <Route index element={<StudentCourseList />} />
      <Route path="course/:id" element={<CourseView />} />
      <Route path="course/:courseId/lesson/:moduleIndex/:lessonIndex" element={<LessonView />} />
      <Route path="course/:id/certificate" element={<Certificate />} />
    </Routes>
  );
}
