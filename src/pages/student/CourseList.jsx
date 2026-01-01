import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { Link } from "react-router-dom";

export default function StudentCourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function loadCourses() {
      const { data } = await supabase
        .from("courses")
        .select("id, title, audience")
        .eq("status", "published")
        .order("created_at", { ascending: false });

      setCourses(data || []);
    }

    loadCourses();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>🎓 Available Courses</h1>

      {courses.map((c) => (
        <div key={c.id} style={{ marginBottom: 12 }}>
          <Link to={`/student/course/${c.id}`}>
            <strong>{c.title}</strong>
          </Link>
          <div style={{ fontSize: 13 }}>
            Audience: {c.audience}
          </div>
        </div>
      ))}

      {courses.length === 0 && (
        <p>No published courses yet.</p>
      )}
    </div>
  );
}
