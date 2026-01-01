#!/bin/bash
set -e

FILE="src/main.jsx"
BACKUP="src/main.jsx.broken.bak"

echo "🧹 Cleaning main.jsx..."

cp $FILE $BACKUP

cat << 'EOC' > $FILE
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";

const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkKey) {
  document.body.innerHTML =
    "<h1 style='color:red'>❌ VITE_CLERK_PUBLISHABLE_KEY is missing</h1>";
} else {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <ClerkProvider publishableKey={clerkKey}>
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense fallback={<div style={{ color: "white" }}>Loading…</div>}>
            <App />
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </ClerkProvider>
  );
}
EOC

echo "✅ main.jsx fixed"
echo "📦 Backup saved as $BACKUP"
