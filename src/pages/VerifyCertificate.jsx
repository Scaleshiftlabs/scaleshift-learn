import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function VerifyCertificate() {
  const { id } = useParams();
  const [cert, setCert] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from("certificates")
        .select("*")
        .eq("id", id)
        .maybeSingle();

      setCert(data);
      setLoading(false);
    }
    load();
  }, [id]);

  if (loading) return <div style={{ padding: 40 }}>Verifying…</div>;

  if (!cert)
    return <div style={{ padding: 40 }}>❌ Certificate not found</div>;

  if (cert.revoked)
    return (
      <div style={{ padding: 40 }}>
        ❌ This certificate has been revoked
      </div>
    );

  return (
    <div style={{ padding: 40 }}>
      <h1>Certificate Verified ✅</h1>

      <p><strong>Name:</strong> {cert.user_name}</p>
      <p><strong>Course:</strong> {cert.course_title}</p>
      <p><strong>Issued:</strong> {new Date(cert.issued_at).toDateString()}</p>
      <p><strong>ID:</strong> {cert.id}</p>

      <p style={{ marginTop: 20 }}>
        Issued digitally by <strong>SCALESHIFT</strong>
      </p>
    </div>
  );
}
