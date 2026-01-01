import { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import { useUser } from "@clerk/clerk-react";

export default function CourseView() {
  const { id } = useParams();
  const { user } = useUser();

  const [course, setCourse] = useState(null);
  const [progress, setProgress] = useState({});
  const [loading, setLoading] = useState(true);
  const lessonRefs = useRef({});

  useEffect(() => {
    async function loadCourse() {
      const { data } = await supabase
        .from("courses")
        .select("*")
        .eq("id", id)
        .single();
      setCourse(data);
      setLoading(false);
    }
    if (id) loadCourse();
  }, [id]);

  useEffect(() => {
    async function loadProgress() {
      const { data } = await supabase
        .from("lesson_progress")
        .select("*")
        .eq("course_id", id)
        .eq("student_id", user.id);

      const map = {};
      data?.forEach(p => {
        map[`${p.module_index}-${p.lesson_index}`] = p.completed;
      });
      setProgress(map);
    }
    if (course && user) loadProgress();
  }, [course, user, id]);

  useEffect(() => {
    if (!course) return;
    for (let i = 0; i < course.outline.modules.length; i++) {
      for (let j = 0; j < course.outline.modules[i].lessons.length; j++) {
        const key = `${i}-${j}`;
        if (!progress[key] && lessonRefs.current[key]) {
          lessonRefs.current[key].scrollIntoView({ behavior: "smooth", block: "center" });
          return;
        }
      }
    }
  }, [progress, course]);

  async function toggleLesson(moduleIndex, lessonIndex) {
    const key = `${moduleIndex}-${lessonIndex}`;
    const completed = !progress[key];
    setProgress({ ...progress, [key]: completed });

    await supabase.from("lesson_progress").upsert({
      student_id: user.id,
      course_id: id,
      module_index: moduleIndex,
      lesson_index: lessonIndex,
      completed
    });
  }

  if (loading) return <div style={{ padding: 40 }}>⏳ Loading…</div>;
  if (!course) return <div style={{ padding: 40 }}>❌ Course not found</div>;

  const totalLessons = course.outline.modules.reduce((s, m) => s + m.lessons.length, 0);
  const completedLessons = Object.values(progress).filter(Boolean).length;
  const percent = Math.round((completedLessons / totalLessons) * 100);
  const isComplete = percent === 100;

  return (
    <div style={{ padding: 40, maxWidth: 1000, margin: "0 auto" }}>
      <h1>{course.title}</h1>

      {/* Progress */}
      <div style={{ margin: "12px 0 24px" }}>
        <div style={{ height: 10, background: "#1e293b", borderRadius: 6 }}>
          <div
            style={{
              width: `${percent}%`,
              height: "100%",
              background: percent === 100 ? "#22c55e" : "#38bdf8",
              borderRadius: 6,
              transition: "width 0.3s"
            }}
          />
        </div>
        <div style={{ marginTop: 6, fontSize: 14 }}>🎯 {percent}% completed</div>
      </div>

      {isComplete && (
        <div
          style={{
            background: "#052e16",
            padding: 16,
            borderRadius: 12,
            marginBottom: 20
          }}
        >
          🏅 <strong>Course Completed!</strong>{" "}
          <Link to={`/student/course/${id}/certificate`} style={{ marginLeft: 8 }}>
            View Certificate →
          </Link>
        </div>
      )}

      {course.outline.modules.map((module, i) => (
        <div key={i} style={{ background: "#111827", borderRadius: 12, padding: 20, marginBottom: 20 }}>
          <h3>{module.title}</h3>
          {module.lessons.map((lesson, j) => {
            const key = `${i}-${j}`;
            const done = progress[key];
            return (
              <label
                key={j}
                ref={el => (lessonRefs.current[key] = el)}
                style={{
                  display: "block",
                  marginTop: 8,
                  padding: 6,
                  borderRadius: 6,
                  background: done ? "#052e16" : "#020617",
                  cursor: "pointer"
                }}
              >
                <input type="checkbox" checked={!!done} onChange={() => toggleLesson(i, j)} />{" "}
                <a
                  href={`/student/course/${id}/lesson/${i}/${j}`}
                  style={{ color: "inherit", textDecoration: "none", marginLeft: 4 }}
                >
                  {lesson}
                </a>
              </label>
            );
          })}
        </div>
      ))}
    </div>
  );
}
