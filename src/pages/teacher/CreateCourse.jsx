import { useState } from "react";
import { generateOutline } from "../../lib/outlineEngine";
import { supabase } from "../../lib/supabase";
import { useUser } from "@clerk/clerk-react";

export default function CreateCourse() {
  const { user } = useUser();

  const [title, setTitle] = useState("");
  const [audience, setAudience] = useState("");
  const [goal, setGoal] = useState("");
  const [outline, setOutline] = useState(null);
  const [statusMsg, setStatusMsg] = useState("");

  async function saveDraft() {
    setStatusMsg("⏳ Saving draft...");

    const result = generateOutline({ title, audience, goal });
    setOutline(result);

    const { error } = await supabase.from("courses").insert({
      title,
      audience,
      goal,
      outline: result,
      status: "draft",
      teacher_id: user.id
    });

    setStatusMsg(error ? "❌ Save failed" : "📝 Saved as Draft");
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>📘 Create New Course</h1>

      <input
        placeholder="Course Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Target Audience"
        value={audience}
        onChange={(e) => setAudience(e.target.value)}
      />

      <textarea
        placeholder="Course goal"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        rows={4}
      />

      <button onClick={saveDraft}>💾 Save as Draft</button>

      {statusMsg && <p>{statusMsg}</p>}

      {outline && (
        <div style={{ marginTop: 20 }}>
          <h3>📚 Preview Outline</h3>
          {outline.modules.map((m, i) => (
            <div key={i}>
              <strong>{m.title}</strong>
              <ul>
                {m.lessons.map((l, j) => (
                  <li key={j}>{l}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
