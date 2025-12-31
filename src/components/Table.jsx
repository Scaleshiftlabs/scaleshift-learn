export default function Table({ columns, data }) {
  return (
    <table style={{
      width: "100%",
      borderCollapse: "collapse",
      background: "#11162a",
      border: "1px solid #1e2440",
      borderRadius: "10px",
      overflow: "hidden"
    }}>
      <thead>
        <tr>
          {columns.map(col => (
            <th key={col} style={{
              textAlign: "left",
              padding: "12px",
              fontSize: "12px",
              opacity: 0.7,
              borderBottom: "1px solid #1e2440"
            }}>
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} style={{
                padding: "12px",
                borderBottom: "1px solid #1e2440"
              }}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
