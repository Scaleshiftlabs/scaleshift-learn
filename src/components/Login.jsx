import { useState } from "react";
import { login } from "../utils/auth";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!email) return;
    setLoading(true);

    const user = await login(email); // ⬅️ WAIT HERE
    onLogin(user);                   // ⬅️ ONLY AFTER HYDRATION
  }

  return (
    <div className="glass" style={{ maxWidth: "360px", margin: "100px auto" }}>
      <h2>Login</h2>

      <input
        placeholder="Enter email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "10px",
          borderRadius: "8px",
          border: "1px solid #e5e7eb"
        }}
      />

      <button
        onClick={handleLogin}
        disabled={loading}
        style={{
          marginTop: "20px",
          width: "100%",
          padding: "10px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          opacity: loading ? 0.7 : 1
        }}
      >
        {loading ? "Signing in…" : "Login"}
      </button>
    </div>
  );
}
