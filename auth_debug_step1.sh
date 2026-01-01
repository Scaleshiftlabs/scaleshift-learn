#!/bin/bash
set -e

APP="src/App.jsx"
BACKUP="src/App.jsx.force.bak"

echo "🔐 Auth debug step 1..."

# restore original App if backup exists
if [ -f "$BACKUP" ]; then
  cp "$BACKUP" "$APP"
fi

cat << 'EOC' > $APP
import { Routes, Route } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

function Debug() {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <div style={{
      minHeight: "100vh",
      background: "#020617",
      color: "#38bdf8",
      padding: 40,
      fontSize: 18
    }}>
      <h1>🔍 AUTH DEBUG PAGE</h1>
      <pre>{JSON.stringify({
        isLoaded,
        isSignedIn,
        userId: user?.id,
        role: user?.publicMetadata?.role
      }, null, 2)}</pre>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Debug />} />
      <Route path="/admin" element={<Debug />} />
      <Route path="/teacher" element={<Debug />} />
    </Routes>
  );
}
EOC

echo "✅ Auth debug routes injected"
