#!/bin/bash
set -e

FILE="src/App.jsx"
BACKUP="src/App.jsx.bak"

echo "🧪 Forcing render test..."

cp $FILE $BACKUP

cat << 'EOC' > $FILE
export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#020617",
      color: "#22c55e",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "32px",
      fontWeight: "bold"
    }}>
      ✅ FORCE RENDER OK — REACT IS WORKING
    </div>
  );
}
EOC

echo "✅ App.jsx replaced with force-render test"
echo "📦 Backup saved as $BACKUP"
