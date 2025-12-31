export default function Toast({ message, type }) {
  const bg =
    type === 'error' ? '#7c2d2d' :
    type === 'success' ? '#1e7c4f' :
    '#1e2440'

  return (
    <div style={{
      background: bg,
      color: '#fff',
      padding: '10px 14px',
      borderRadius: '8px',
      marginBottom: '8px',
      minWidth: '240px'
    }}>
      {message}
    </div>
  )
}
