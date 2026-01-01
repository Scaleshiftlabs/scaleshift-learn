import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

export default function TeacherCourseList() {
  const { user } = useUser();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function loadCourses() {
      const { data } = await supabase
        .from("courses")
        .select("id, title, audience, status")
        .eq("teacher_id", user.id)
        .order("created_at", { ascending: false });

      setCourses(data || []);
    }

    if (user) loadCourses();
  }, [user]);

  return (
    <div style={{ padding: 40 }}>
      <h1>👨‍🏫 Your Courses</h1>
      <Link to="/teacher/create">➕ Create Course</Link>

      {courses.map(c => (
        <div
          key={c.id}
          style={{
            background: "#111827",
            borderRadius: 12,
            padding: 16,
            marginTop: 16
          }}
        >
          <strong>{c.title}</strong>
          <div>Audience: {c.audience}</div>

          <span
            style={{
              display: "inline-block",
              marginTop: 6,
              padding: "2px 8px",
              borderRadius: 6,
              background:
                c.status === "published" ? "#16a34a" : "#334155",
              fontSize: 12
            }}
          >
            {c.status.toUpperCase()}
          </span>

          <div style={{ marginTop: 8 }}>
            <Link to={`/teacher/course/${c.id}/analytics`}>
              📊 View Analytics →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
