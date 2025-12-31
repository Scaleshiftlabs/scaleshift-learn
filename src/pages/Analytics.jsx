import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
)

export default function Analytics() {
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue (₹)',
        data: [120000, 180000, 260000, 320000, 410000, 460000]
      }
    ]
  }

  const leadsData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Leads',
        data: [12, 19, 9, 22, 17, 14, 28]
      }
    ]
  }

  return (
    <div style={{ padding: "24px" }}>
      <h1 style={{ marginBottom: "16px" }}>Analytics</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "24px"
      }}>
        <div style={{
          background: "#11162a",
          padding: "16px",
          borderRadius: "10px",
          border: "1px solid #1e2440"
        }}>
          <h3 style={{ marginBottom: "12px" }}>Revenue Trend</h3>
          <Line data={revenueData} />
        </div>

        <div style={{
          background: "#11162a",
          padding: "16px",
          borderRadius: "10px",
          border: "1px solid #1e2440"
        }}>
          <h3 style={{ marginBottom: "12px" }}>Leads This Week</h3>
          <Bar data={leadsData} />
        </div>
      </div>
    </div>
  )
}
