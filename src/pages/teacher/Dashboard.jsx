import { Routes, Route } from "react-router-dom";
import TeacherCourseList from "./CourseList";
import CreateCourse from "./CreateCourse";
import CourseAnalytics from "./CourseAnalytics";

export default function TeacherDashboard() {
  return (
    <Routes>
      <Route index element={<TeacherCourseList />} />
      <Route path="create" element={<CreateCourse />} />
      <Route path="course/:id/analytics" element={<CourseAnalytics />} />
    </Routes>
  );
}
