import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useUser } from "@clerk/clerk-react";

export default function Certificate() {
  const { id } = useParams(); // course_id
  const { user } = useUser();
  const [cert, setCert] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadOrCreate() {
      const { data: existing } = await supabase
        .from("certificates")
        .select("*")
        .eq("user_id", user.id)
        .eq("course_id", id)
        .maybeSingle();

      if (existing) {
        setCert(existing);
        setLoading(false);
        return;
      }

      const { data: course } = await supabase
        .from("courses")
        .select("id, title")
        .eq("id", id)
        .single();

      const { data: created } = await supabase
        .from("certificates")
        .insert({
          user_id: user.id,
          user_name: user.fullName,
          course_id: course.id,
          course_title: course.title
        })
        .select()
        .single();

      setCert(created);
      setLoading(false);
    }

    loadOrCreate();
  }, [id, user]);

  if (loading) return <div style={{ padding: 40 }}>Preparing certificate…</div>;
  if (!cert) return <div style={{ padding: 40 }}>❌ Certificate unavailable</div>;

  const verifyUrl = `${window.location.origin}/verify/${cert.id}`;

  return (
    <div style={{ padding: 40 }}>
      <h1>🎓 Certificate Issued</h1>
      <p><strong>{cert.user_name}</strong></p>
      <p>{cert.course_title}</p>
      <p>ID: {cert.id}</p>
      <a href={verifyUrl} target="_blank">Verify Certificate</a>
    </div>
  );
}
