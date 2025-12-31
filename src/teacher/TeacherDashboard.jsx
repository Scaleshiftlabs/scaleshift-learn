import React from "react";
import { useNavigate } from "react-router-dom";

export default function TeacherDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Teacher Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button
          onClick={() => navigate("/teacher/create")}
          className="bg-slate-800 hover:bg-slate-700 transition rounded-xl p-6 text-left"
        >
          <h2 className="text-xl font-semibold mb-2">➕ Create Course</h2>
          <p className="text-sm opacity-70">
            Define goals and let AI build the course
          </p>
        </button>

        <div className="bg-slate-800 rounded-xl p-6 opacity-60 cursor-not-allowed">
          <h2 className="text-xl font-semibold mb-2">🤖 AI Lessons</h2>
          <p className="text-sm">
            Generate lessons automatically
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 opacity-60 cursor-not-allowed">
          <h2 className="text-xl font-semibold mb-2">📝 Quizzes & Assignments</h2>
          <p className="text-sm">
            AI-generated assessments
          </p>
        </div>
      </div>
    </div>
  );
}
