import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../services/firebase"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  async function submit(e) {
    e.preventDefault()
    setError("")
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/")   // ✅ REDIRECT HERE
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <button>Sign in</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  )
}
