import { useState, useEffect } from "react";

export default function AIGenerator({ onChange }) {
  const [modules, setModules] = useState([
    {
      title: "Introduction",
      lessons: [
        "What is Digital Marketing?",
        "Who should take this course?"
      ]
    },
    {
      title: "Core Concepts",
      lessons: [
        "Key fundamentals",
        "Tools & frameworks"
      ]
    }
  ]);

  const [editing, setEditing] = useState(null);

  // 🔁 Sync to parent for Save Draft
  useEffect(() => {
    if (onChange) onChange(modules);
  }, [modules, onChange]);

  // ===== MODULE ACTIONS =====

  const addModule = () => {
    setModules([
      ...modules,
      { title: "New Module", lessons: ["New lesson"] }
    ]);
  };

  const updateModuleTitle = (mIndex, value) => {
    const copy = [...modules];
    copy[mIndex].title = value;
    setModules(copy);
  };

  const deleteModule = (mIndex) => {
    const copy = [...modules];
    copy.splice(mIndex, 1);
    setModules(copy);
  };

  // ===== LESSON ACTIONS =====

  const updateLesson = (mIndex, lIndex, value) => {
    const copy = [...modules];
    copy[mIndex].lessons[lIndex] = value;
    setModules(copy);
  };

  const addLesson = (mIndex) => {
    const copy = [...modules];
    copy[mIndex].lessons.push("New lesson");
    setModules(copy);
    setEditing("l-" + mIndex + "-" + (copy[mIndex].lessons.length - 1));
  };

  const deleteLesson = (mIndex, lIndex) => {
    const copy = [...modules];
    copy[mIndex].lessons.splice(lIndex, 1);
    setModules(copy);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>AI Generated Course Preview</h2>

      {modules.map((module, mIndex) => (
        <div key={mIndex} style={box}>
          <div style={moduleHeader}>
            {editing === "m-" + mIndex ? (
              <input
                value={module.title}
                onChange={(e) =>
                  updateModuleTitle(mIndex, e.target.value)
                }
                onBlur={() => setEditing(null)}
                style={input}
                autoFocus
              />
            ) : (
              <strong
                style={{ cursor: "pointer" }}
                onClick={() => setEditing("m-" + mIndex)}
              >
                Module {mIndex + 1}: {module.title} ✏️
              </strong>
            )}

            <button
              onClick={() => deleteModule(mIndex)}
              style={deleteModuleBtn}
            >
              ❌
            </button>
          </div>

          <ul>
            {module.lessons.map((lesson, lIndex) => (
              <li key={lIndex}>
                {editing === "l-" + mIndex + "-" + lIndex ? (
                  <input
                    value={lesson}
                    onChange={(e) =>
                      updateLesson(mIndex, lIndex, e.target.value)
                    }
                    onBlur={() => setEditing(null)}
                    style={input}
                    autoFocus
                  />
                ) : (
                  <>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        setEditing("l-" + mIndex + "-" + lIndex)
                      }
                    >
                      {lesson} ✏️
                    </span>
                    <button
                      onClick={() => deleteLesson(mIndex, lIndex)}
                      style={deleteLessonBtn}
                    >
                      ❌
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>

          <button onClick={() => addLesson(mIndex)} style={addBtn}>
            ➕ Add Lesson
          </button>
        </div>
      ))}

      <button onClick={addModule} style={addModuleBtn}>
        ➕ Add Module
      </button>
    </div>
  );
}

/* ===== styles ===== */

const box = {
  marginTop: "16px",
  padding: "16px",
  border: "1px solid #1e293b",
  borderRadius: "10px"
};

const moduleHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const input = {
  width: "90%",
  padding: "6px",
  marginBottom: "6px"
};

const addBtn = {
  marginTop: "10px",
  padding: "6px 10px",
  background: "#020617",
  color: "white",
  border: "1px solid #334155",
  borderRadius: "6px",
  cursor: "pointer"
};

const addModuleBtn = {
  marginTop: "20px",
  padding: "10px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};

const deleteLessonBtn = {
  marginLeft: "8px",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  color: "#ef4444"
};

const deleteModuleBtn = {
  background: "transparent",
  border: "none",
  cursor: "pointer",
  color: "#ef4444"
};
