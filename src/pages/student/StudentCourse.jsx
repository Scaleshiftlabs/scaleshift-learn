import { useEffect, useState } from "react";
import { loadLatestPublishedCourse } from "../../student/publishedLoader";
import { markLessonComplete, getProgress } from "../../student/progressStorage";
import { isCourseComplete } from "../../student/completionChecker";

export default function StudentCourse() {
  const COURSE_ID = "DM-001";
  const [course, setCourse] = useState(null);
  const [activeModule, setActiveModule] = useState(0);
  const [activeLesson, setActiveLesson] = useState(0);
  const [progress, setProgress] = useState({});
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const published = loadLatestPublishedCourse(COURSE_ID);
    if (published) {
      setCourse(published);
      const stored = getProgress(COURSE_ID, published.version);
      setProgress(stored);
      setCompleted(isCourseComplete(published, stored));
    }
  }, []);

  if (!course) {
    return <div style={page}><h2>No published course</h2></div>;
  }

  const modules = course.data.course.modules;
  const lesson = modules[activeModule].lessons[activeLesson];

  const completeLesson = () => {
    markLessonComplete(
      COURSE_ID,
      course.version,
      activeModule,
      activeLesson
    );

    const updated = getProgress(COURSE_ID, course.version);
    setProgress(updated);
    setCompleted(isCourseComplete(course, updated));
  };

  return (
    <div style={page}>
      <div style={sidebar}>
        <h3>{course.data.course.title}</h3>

        {modules.map((m, mi) => (
          <div key={mi}>
            <strong>{mi + 1}. {m.title}</strong>
            <ul>
              {m.lessons.map((l, li) => (
                <li
                  key={li}
                  style={{
                    cursor: "pointer",
                    color: progress[mi]?.[li] ? "#22c55e" : "white"
                  }}
                  onClick={() => {
                    setActiveModule(mi);
                    setActiveLesson(li);
                  }}
                >
                  • {l.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={content}>
        <h2>{lesson.title}</h2>
	<video
         width="100%"
         height="auto"
         controls
         style={{ marginTop: "20px" }
       }>
  <source src={lesson.video.url} type="video/mp4" />
  Your browser does not support the video tag.
</video>
        <p>Video plays here</p>

        {!progress[activeModule]?.[activeLesson] && (
          <button onClick={completeLesson}>
            Mark Lesson Complete
          </button>
        )}

        {completed && (
          <div style={{ marginTop: "30px", color: "#22c55e" }}>
            🎉 Course Completed! Certificate unlocked.
          </div>
        )}
      </div>
    </div>
  );
}

const page = { minHeight: "100vh", display: "flex", background: "#020617", color: "white" };
const sidebar = { width: "320px", padding: "20px", borderRight: "1px solid #1e293b" };
const content = { flex: 1, padding: "40px" };
