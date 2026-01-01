#!/bin/bash
set -e

echo "🚀 ScaleShift v1 Fast Patch Starting..."

# =============================
# 1. Error Boundary
# =============================
mkdir -p src/components

cat << 'EOC' > src/components/ErrorBoundary.jsx
import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, color: "white", background: "#0f172a" }}>
          ❌ Something broke. Refresh or contact admin.
        </div>
      );
    }
    return this.props.children;
  }
}
EOC

# =============================
# 2. Role Guard
# =============================
cat << 'EOC' > src/components/RequireRole.jsx
import { Navigate } from "react-router-dom";

export default function RequireRole({ role, user, children }) {
  if (!user) return <Navigate to="/login" />;
  if (user.role !== role) return <Navigate to="/unauthorized" />;
  return children;
}
EOC

# =============================
# 3. SQL Schema
# =============================
mkdir -p db

cat << 'EOS' > db/certificates.sql
CREATE TABLE IF NOT EXISTS certificates (
  id UUID PRIMARY KEY,
  user_id TEXT NOT NULL,
  course_id UUID NOT NULL,
  issued_at TIMESTAMP DEFAULT NOW(),
  UNIQUE (user_id, course_id)
);

CREATE TABLE IF NOT EXISTS certificate_downloads (
  id UUID PRIMARY KEY,
  certificate_id UUID REFERENCES certificates(id),
  downloaded_at TIMESTAMP DEFAULT NOW()
);
EOS

# =============================
# 4. Download Logic Snippet
# =============================
mkdir -p src/snippets

cat << 'EOC' > src/snippets/certificateDownload.js
export async function logCertificateDownload(db, userId, courseId) {
  const { data: cert } = await db
    .from("certificates")
    .select("*")
    .eq("user_id", userId)
    .eq("course_id", courseId)
    .single();

  if (!cert) throw new Error("Certificate not found");

  await db.from("certificate_downloads").insert({
    certificate_id: cert.id
  });

  return cert;
}
EOC

echo "✅ Patch files created successfully"
echo "👉 Next steps:"
echo "1. Import ErrorBoundary in main.jsx"
echo "2. Wrap <App /> with <ErrorBoundary />"
echo "3. Run SQL in Supabase/Postgres"
echo "4. Use logCertificateDownload() on download"
echo "5. npm run dev"
