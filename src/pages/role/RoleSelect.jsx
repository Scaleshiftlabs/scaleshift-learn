import { useNavigate } from "react-router-dom";

export default function RoleSelect() {
  const navigate = useNavigate();

  function choose(role) {
    localStorage.setItem("role", role);
    navigate(`/${role}`);
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Choose your role</h1>
      <button onClick={() => choose("student")}>🎓 Student</button><br /><br />
      <button onClick={() => choose("teacher")}>👨‍🏫 Teacher</button>
    </div>
  );
}
