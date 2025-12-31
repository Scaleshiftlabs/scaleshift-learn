import { useState, useEffect } from "react";
import AIGenerator from "../../components/ai/AIGenerator";

export default function CreateCourse() {
  const [course, setCourse] = useState({
    title: "",
    goal: ""
  });

  const [modules, setModules] = useState([]);
  const [showAI, setShowAI] = useState(false);

  // 🔁 Load draft on page load
  useEffect(() => {
    const saved = localStorage.getItem("scaleshift-course-draft");
    if (saved) {
      const data = JSON.parse(saved);
      setCourse(data.course);
      setModules(data.modules);
      setShowAI(true);
    }
  }, []);

  const handleSaveDraft = () => {
    const draft = {
      course,
      modules,
      savedAt: new Date().toISOString()
    };
    localStorage.setItem(
      "scaleshift-course-draft",
      JSON.stringify(draft, null, 2)
    );
    alert("Draft saved successfully ✅");
  };

  return (
    <div style={page}>
      <div style={card}>
        <h1>Create New Course</h1>

        <label>Course Title</label>
        <input
          value={course.title}
          onChange={(e) =>
            setCourse({ ...course, title: e.target.value })
          }
          style={input}
        />

        <label>Course Goal</label>
        <textarea
          value={course.goal}
          onChange={(e) =>
            setCourse({ ...course, goal: e.target.value })
          }
          style={textarea}
        />

        <div style={{ marginTop: "16px" }}>
          <button
            onClick={() => setShowAI(true)}
            style={primaryBtn}
          >
            🚀 Generate with AI
          </button>

          <button
            onClick={handleSaveDraft}
            style={secondaryBtn}
          >
            💾 Save Draft
          </button>
        </div>

        {showAI && (
          <AIGenerator onChange={setModules} />
        )}
      </div>
    </div>
  );
}

/* ===== styles ===== */

const page = {
  minHeight: "100vh",
  background: "#0f172a",
  display: "flex",
  justifyContent: "center",
  padding: "40px",
  color: "white"
};

const card = {
  width: "100%",
  maxWidth: "800px",
  background: "#020617",
  padding: "30px",
  borderRadius: "16px"
};

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "16px"
};

const textarea = {
  width: "100%",
  padding: "12px",
  minHeight: "80px"
};

const primaryBtn = {
  padding: "10px 16px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  marginRight: "10px"
};

const secondaryBtn = {
  padding: "10px 16px",
  background: "#020617",
  color: "white",
  border: "1px solid #334155",
  borderRadius: "8px",
  cursor: "pointer"
};

