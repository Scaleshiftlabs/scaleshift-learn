export default function Debug() {
  return (
    <pre style={{ color: "white", padding: 40 }}>
      {JSON.stringify({
        url: import.meta.env.VITE_SUPABASE_URL,
        anon: import.meta.env.VITE_SUPABASE_ANON_KEY,
      }, null, 2)}
    </pre>
  )
}
