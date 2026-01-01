import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function CertificateAdmin() {
  const [certs, setCerts] = useState([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const { data } = await supabase
      .from("certificates")
      .select("*")
      .order("issued_at", { ascending: false });

    setCerts(data || []);
  }

  async function toggle(cert) {
    await supabase
      .from("certificates")
      .update({ revoked: !cert.revoked })
      .eq("id", cert.id);

    load();
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Certificate Administration</h1>

      {certs.map(c => (
        <div
          key={c.id}
          style={{
            border: "1px solid #e5e7eb",
            padding: 16,
            marginTop: 12,
            borderRadius: 8
          }}
        >
          <strong>{c.user_name}</strong> — {c.course_title}
          <div style={{ fontSize: 12, color: "#64748b" }}>
            {c.id}
          </div>

          <button
            onClick={() => toggle(c)}
            style={{
              marginTop: 10,
              padding: "6px 12px",
              borderRadius: 6,
              border: "none",
              cursor: "pointer",
              background: c.revoked ? "#16a34a" : "#dc2626",
              color: "#fff"
            }}
          >
            {c.revoked ? "Restore Certificate" : "Revoke Certificate"}
          </button>
        </div>
      ))}
    </div>
  );
}
