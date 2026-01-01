import { Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";

function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f172a",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "26px",
      fontWeight: "bold"
    }}>
      🚀 ScaleShift Learn — App Running
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Public home */}
      <Route path="/" element={<Home />} />

      {/* Auth */}
      <Route
        path="/sign-in/*"
        element={
          <SignedOut>
            <SignIn routing="path" path="/sign-in" />
          </SignedOut>
        }
      />

      {/* Protected area (future courses / dashboard) */}
      <Route
        path="/app"
        element={
          <SignedIn>
            <Home />
          </SignedIn>
        }
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
