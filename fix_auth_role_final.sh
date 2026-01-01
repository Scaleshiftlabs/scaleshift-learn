#!/bin/bash
set -e

echo "🔐 Applying FINAL auth + role fix..."

# =============================
# 1. Create useAuthRole hook
# =============================
mkdir -p src/hooks

cat << 'EOC' > src/hooks/useAuthRole.js
import { useUser } from "@clerk/clerk-react";

export function useAuthRole() {
  const { isLoaded, isSignedIn, user } = useUser();

  const role = user?.publicMetadata?.role || null;

  return {
    isLoaded,
    isSignedIn,
    role,
    user
  };
}
EOC

# =============================
# 2. Fix RequireRole guard
# =============================
cat << 'EOC' > src/components/RequireRole.jsx
import { Navigate } from "react-router-dom";
import { useAuthRole } from "../hooks/useAuthRole";

export default function RequireRole({ role: requiredRole, children }) {
  const { isLoaded, isSignedIn, role } = useAuthRole();

  if (!isLoaded) {
    return <div style={{ color: "white" }}>Loading…</div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/login" replace />;
  }

  if (role !== requiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}
EOC

# =============================
# 3. Restore App.jsx (clean router)
# =============================
cat << 'EOC' > src/App.jsx
import { Routes, Route } from "react-router-dom";
import RequireRole from "./components/RequireRole";

function Home() {
  return <h1 style={{color:"white"}}>Home OK</h1>;
}

function Admin() {
  return <h1 style={{color:"white"}}>Admin OK</h1>;
}

function Teacher() {
  return <h1 style={{color:"white"}}>Teacher OK</h1>;
}

function Unauthorized() {
  return <h1 style={{color:"red"}}>❌ Unauthorized</h1>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/admin"
        element={
          <RequireRole role="admin">
            <Admin />
          </RequireRole>
        }
      />

      <Route
        path="/teacher"
        element={
          <RequireRole role="teacher">
            <Teacher />
          </RequireRole>
        }
      />

      <Route path="/unauthorized" element={<Unauthorized />} />
    </Routes>
  );
}
EOC

echo "✅ FINAL auth + role fix applied"
