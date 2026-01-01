import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../../lib/supabase";

export default function CourseAnalytics() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [stats, setStats] = useState({
    students: 0,
    avgProgress: 0
  });

  useEffect(() => {
    async function loadData() {
      const { data: courseData } = await supabase
        .from("courses")
        .select("*")
        .eq("id", id)
        .single();

      setCourse(courseData);

      const { data: progress } = await supabase
        .from("lesson_progress")
        .select("student_id, completed");

      if (!courseData || !progress) return;

      const studentsMap = {};
      progress.forEach(p => {
        if (!studentsMap[p.student_id]) {
          studentsMap[p.student_id] = { total: 0, done: 0 };
        }
        studentsMap[p.student_id].total += 1;
        if (p.completed) studentsMap[p.student_id].done += 1;
      });

      const studentIds = Object.keys(studentsMap);
      let avg = 0;

      studentIds.forEach(id => {
        avg +=
          (studentsMap[id].done / studentsMap[id].total) * 100;
      });

      setStats({
        students: studentIds.length,
        avgProgress: studentIds.length
          ? Math.round(avg / studentIds.length)
          : 0
      });
    }

    loadData();
  }, [id]);

  if (!course) return <div style={{ padding: 40 }}>⏳ Loading…</div>;

  return (
    <div style={{ padding: 40, maxWidth: 900, margin: "0 auto" }}>
      <Link to="/teacher">← Back to courses</Link>

      <h1 style={{ marginTop: 20 }}>
        📊 Analytics — {course.title}
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20,
          marginTop: 30
        }}
      >
        <div
          style={{
            background: "#111827",
            padding: 20,
            borderRadius: 12
          }}
        >
          <h3>👥 Students</h3>
          <p style={{ fontSize: 28 }}>{stats.students}</p>
        </div>

        <div
          style={{
            background: "#111827",
            padding: 20,
            borderRadius: 12
          }}
        >
          <h3>📈 Avg Progress</h3>
          <p style={{ fontSize: 28 }}>{stats.avgProgress}%</p>
        </div>
      </div>
    </div>
  );
}
