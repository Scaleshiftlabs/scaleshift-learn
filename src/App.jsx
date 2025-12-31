import { Routes, Route } from "react-router-dom";
import StudentHome from "./student/StudentHome";
import StudentDecision from "./student/StudentDecision";
import StudentLesson from "./student/StudentLesson";
import StudentQuiz from "./student/StudentQuiz";
import Capstone from "./student/Capstone";

export default function App() {
  return (
    <Routes>
      <Route path="/student/home" element={<StudentHome />} />
      <Route path="/student/decision/:decisionId" element={<StudentDecision />} />
      <Route path="/student/lesson/:decisionId/:lessonId" element={<StudentLesson />} />
      <Route path="/student/quiz/:decisionId" element={<StudentQuiz />} />
      <Route path="/student/capstone" element={<Capstone />} />
    </Routes>
  );
}
