export default function Skeleton({ height = 16, width = '100%' }) {
  return (
    <div style={{
      height,
      width,
      background: 'linear-gradient(90deg,#1e2440,#2a3160,#1e2440)',
      backgroundSize: '200% 100%',
      animation: 'pulse 1.2s infinite',
      borderRadius: '6px',
      marginBottom: '8px'
    }} />
  )
}
