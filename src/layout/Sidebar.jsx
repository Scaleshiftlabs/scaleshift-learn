import { Link, useLocation } from 'react-router-dom'

const items = [
  { path: '/', label: 'Dashboard' },
  { path: '/clients', label: 'Clients' },
  { path: '/workflows', label: 'Workflows' },
  { path: '/analytics', label: 'Analytics' }
]

export default function Sidebar() {
  const { pathname } = useLocation()

  return (
    <aside style={{
      width: "240px",
      background: "#0f1426",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      borderRight: "1px solid #1e2440"
    }}>
      <h2 style={{ marginBottom: "20px" }}>ScaleShift</h2>

      {items.map(i => {
        const active = pathname === i.path
        return (
          <Link
            key={i.path}
            to={i.path}
            style={{
              textDecoration: "none",
              color: active ? "#4f7cff" : "#ffffff",
              background: active ? "rgba(79,124,255,0.12)" : "transparent",
              borderLeft: active ? "3px solid #4f7cff" : "3px solid transparent",
              padding: "10px 12px",
              borderRadius: "6px"
            }}
          >
            {i.label}
          </Link>
        )
      })}
    </aside>
  )
}
