import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../../lib/supabase";

export default function LessonView() {
  const { courseId, moduleIndex, lessonIndex } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    async function loadCourse() {
      const { data } = await supabase
        .from("courses")
        .select("*")
        .eq("id", courseId)
        .single();

      setCourse(data);
    }

    loadCourse();
  }, [courseId]);

  if (!course) {
    return <div style={{ padding: 40 }}>⏳ Loading lesson…</div>;
  }

  const module = course.outline.modules[moduleIndex];
  const lesson = module.lessons[lessonIndex];

  return (
    <div style={{ padding: 40, maxWidth: 900, margin: "0 auto" }}>
      <Link to={`/student/course/${courseId}`}>← Back to course</Link>

      <h1 style={{ marginTop: 20 }}>{lesson}</h1>
      <p style={{ opacity: 0.7 }}>
        Module: <strong>{module.title}</strong>
      </p>

      <div
        style={{
          marginTop: 24,
          padding: 20,
          background: "#111827",
          borderRadius: 12
        }}
      >
        <p>
          📘 <strong>Lesson Content</strong>
        </p>

        <p style={{ marginTop: 12, lineHeight: 1.6 }}>
          This is a placeholder for lesson content.
          <br /><br />
          In the next phase, this can include:
          <ul>
            <li>AI-generated explanation</li>
            <li>Examples</li>
            <li>Assignments</li>
            <li>Videos</li>
          </ul>
        </p>
      </div>
    </div>
  );
}
