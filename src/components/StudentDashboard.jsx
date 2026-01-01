import { courses } from "../data/courses";
import { getProgress, getLastOpen } from "../utils/progress";
import { hasAccess } from "../utils/purchase";
import Invoices from "./Invoices";

export default function StudentDashboard({ onOpenCourse, onBuy }) {
  const last = getLastOpen();

  return (
    <div>
      <h2>📚 My Courses</h2>

      {courses.map(course => {
        const progress = getProgress(course.id);
        const access = course.price === 0 || hasAccess(course.id);
        const isLast = last?.courseId === course.id;

        return (
          <div key={course.id} className="glass" style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-between"
          }}>
            <div>
              <h3>{course.title}</h3>
              <p>{course.price === 0 ? "Free" : `₹${course.price}`}</p>
              {access && <p>Progress: {progress}%</p>}
              {isLast && access && <small>Last opened: {last.type}</small>}
            </div>

            {access ? (
              <button onClick={() => onOpenCourse(course.id)}>▶ Open</button>
            ) : (
              <button onClick={() => onBuy(course)}>Buy Course</button>
            )}
          </div>
        );
      })}

      <Invoices />
    </div>
  );
}
