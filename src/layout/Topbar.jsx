import { useAuth } from '../auth/AuthContext'

export default function Topbar() {
  const { user, logout } = useAuth()

  return (
    <header style={{
      height: "60px",
      background: "#0f1426",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 24px",
      borderBottom: "1px solid #1e2440"
    }}>
      <strong>Enterprise Control Panel</strong>

      {user && (
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{
            background: "#1e2440",
            padding: "6px 10px",
            borderRadius: "999px",
            fontSize: "12px"
          }}>
            USER
          </span>
          <span style={{ opacity: 0.85 }}>{user.email}</span>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </header>
  )
}
