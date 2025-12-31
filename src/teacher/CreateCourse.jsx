import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateCourse() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [audience, setAudience] = useState("");
  const [goal, setGoal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("COURSE INTENT", {
      title,
      audience,
      goal,
    });

    alert("Course intent saved. AI generation next.");
    navigate("/teacher");
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create New Course</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm mb-2 opacity-70">Course Title</label>
          <input
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 rounded bg-slate-800 border border-slate-700"
            placeholder="Digital Marketing Mastery"
          />
        </div>

        <div>
          <label className="block text-sm mb-2 opacity-70">Target Audience</label>
          <input
            required
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            className="w-full p-3 rounded bg-slate-800 border border-slate-700"
            placeholder="Beginners / Professionals"
          />
        </div>

        <div>
          <label className="block text-sm mb-2 opacity-70">Course Goal</label>
          <textarea
            required
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full p-3 rounded bg-slate-800 border border-slate-700"
            placeholder="What should students be able to do?"
            rows={4}
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 rounded hover:bg-blue-700"
          >
            Save & Generate with AI
          </button>

          <button
            type="button"
            onClick={() => navigate("/teacher")}
            className="px-6 py-3 bg-slate-700 rounded hover:bg-slate-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
