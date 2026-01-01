import { courses } from "../../data/courses";
import { getAllLocal } from "../../utils/adminData";
import { adminMarkPaid } from "../../utils/adminActions";

export default function AdminDashboard() {
  const users = getAllLocal("progress_");
  const payments = getAllLocal("payments_");
  const invoices = getAllLocal("invoices_");
  const certificates = getAllLocal("certificates_");

  function markPaid(email, course) {
    adminMarkPaid({ email, course });
    alert(`Marked PAID for ${email} — ${course.title}`);
    window.location.reload();
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>🛠 Admin Dashboard</h1>

      {/* USERS */}
      <h2>👤 Users</h2>
      {users.length === 0 && <p>No users yet</p>}
      {users.map(u => {
        const email = u.key.replace("progress_", "");
        return (
          <div key={u.key} className="glass" style={{ marginTop: "10px" }}>
            <b>{email}</b>
            <div style={{ marginTop: "10px" }}>
              {courses.map(course => (
                <button
                  key={course.id}
                  onClick={() => markPaid(email, course)}
                  style={{
                    marginRight: "10px",
                    padding: "6px 10px",
                    background: "#16a34a",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer"
                  }}
                >
                  Mark Paid — {course.title}
                </button>
              ))}
            </div>
          </div>
        );
      })}

      {/* PAYMENTS */}
      <h2 style={{ marginTop: "40px" }}>💰 Payments</h2>
      {payments.length === 0 && <p>No payments recorded yet</p>}
      {payments.map(p => (
        <div key={p.key} className="glass" style={{ marginTop: "10px" }}>
          <b>{p.key.replace("payments_", "")}</b>
          <pre>{JSON.stringify(p.value, null, 2)}</pre>
        </div>
      ))}

      {/* INVOICES */}
      <h2 style={{ marginTop: "40px" }}>🧾 Invoices</h2>
      {invoices.length === 0 && <p>No invoices generated yet</p>}
      {invoices.map(i => (
        <div key={i.key} className="glass" style={{ marginTop: "10px" }}>
          <b>{i.key.replace("invoices_", "")}</b>
          <pre>{JSON.stringify(i.value, null, 2)}</pre>
        </div>
      ))}

      {/* CERTIFICATES */}
      <h2 style={{ marginTop: "40px" }}>🎓 Certificates</h2>
      {certificates.length === 0 && <p>No certificates issued yet</p>}
      {certificates.map(c => (
        <div key={c.key} className="glass" style={{ marginTop: "10px" }}>
          <b>{c.key.replace("certificates_", "")}</b>
          <pre>{JSON.stringify(c.value, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
}
