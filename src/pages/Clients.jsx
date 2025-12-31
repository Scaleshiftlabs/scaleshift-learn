import Table from '../components/Table'
import { useToast } from '../components/ToastProvider'

export default function Clients() {
  const toast = useToast()
  const columns = ['Client', 'Plan', 'Status', 'Revenue']
  const data = []

  if (data.length === 0) {
    return (
      <div style={{ padding: "24px" }}>
        <h1 style={{ marginBottom: "16px" }}>Clients</h1>
        <div style={{
          background: "#0f1426",
          border: "1px dashed #1e2440",
          padding: "24px",
          borderRadius: "10px"
        }}>
          No clients yet.
          <br /><br />
          <button onClick={() => toast.show('Create client clicked', 'success')}>
            Add First Client
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ padding: "24px" }}>
      <h1 style={{ marginBottom: "16px" }}>Clients</h1>
      <Table columns={columns} data={data} />
    </div>
  )
}
