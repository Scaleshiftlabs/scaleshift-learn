import { useAuth } from "../auth/AuthContext"

export default function Dashboard() {
  const { user, logout } = useAuth()

  return (
    <div style={{ padding: 40 }}>
      <h1>Dashboard</h1>
      <p>Logged in as: {user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
