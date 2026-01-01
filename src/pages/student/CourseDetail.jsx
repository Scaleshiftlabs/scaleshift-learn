import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import CourseView from "./CourseView";

export default function StudentCourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    async function loadCourse() {
      const { data } = await supabase
        .from("courses")
        .select("*")
        .eq("id", id)
        .single();

      setCourse(data);
    }
    loadCourse();
  }, [id]);

  return <CourseView course={course} />;
}
