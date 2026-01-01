import { SignIn } from "@clerk/clerk-react";

export default function Login() {
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <SignIn afterSignInUrl="/student" afterSignUpUrl="/student" />
    </div>
  );
}

