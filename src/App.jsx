import { useState } from "react";
import { getUser, logout } from "./utils/auth";
import { isAdmin } from "./utils/admin";
import { courses } from "./data/courses";
import { hasAccess } from "./utils/purchase";

import Login from "./components/Login";
import StudentDashboard from "./components/StudentDashboard";
import AdminDashboard from "./components/admin/AdminDashboard";
import PaymentModal from "./components/PaymentModal";
import Locked from "./components/Locked";
import CourseSidebar from "./components/CourseSidebar";

import Video from "./modules/demo/Video";
import Assignment from "./modules/demo/Assignment";
import Quiz from "./modules/demo/Quiz";
import Handout from "./modules/demo/Handout";
import CertificateCard from "./components/CertificateCard";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [courseId, setCourseId] = useState(null);
  const [active, setActive] = useState("video");
  const [buyCourse, setBuyCourse] = useState(null);

  if (!user) return <Login onLogin={setUser} />;

  /* ---------------- ADMIN ---------------- */
  if (isAdmin()) {
    return (
      <div>
        <div style={{ padding: "20px", textAlign: "right" }}>
          <button onClick={() => { logout(); setUser(null); }}>
            Logout
          </button>
        </div>
        <AdminDashboard />
      </div>
    );
  }

  /* ---------------- STUDENT DASHBOARD ---------------- */
  if (!courseId) {
    return (
      <div style={{ padding: "40px" }}>
        <div style={{ textAlign: "right", marginBottom: "10px" }}>
          <button onClick={() => { logout(); setUser(null); }}>
            Logout
          </button>
        </div>

        <StudentDashboard
          onOpenCourse={(id) => setCourseId(id)}
          onBuy={(course) => setBuyCourse(course)}
        />

        {buyCourse && (
          <PaymentModal
            course={buyCourse}
            onClose={() => setBuyCourse(null)}
          />
        )}
      </div>
    );
  }

  /* ---------------- COURSE VIEW ---------------- */
  const course = courses.find(c => c.id === courseId);
  const access = course.price === 0 || hasAccess(course.id);

  return (
    <div style={{ display: "flex", gap: "20px", padding: "40px" }}>
      <CourseSidebar
        moduleId={courseId}
        active={active}
        onSelect={setActive}
      />

      <div style={{ flex: 1 }}>
        {!access && <Locked course={course} />}

        {access && (
          <>
            {active === "video" && <Video courseId={courseId} />}
            {active === "assignment" && <Assignment courseId={courseId} />}
            {active === "quiz" && <Quiz courseId={courseId} />}
            {active === "handout" && <Handout courseId={courseId} />}

            <CertificateCard moduleId={courseId} />
          </>
        )}

        <button
          onClick={() => setCourseId(null)}
          style={{
            marginTop: "20px",
            background: "transparent",
            border: "none",
            color: "#2563eb",
            cursor: "pointer"
          }}
        >
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}
