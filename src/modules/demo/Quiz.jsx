import { useEffect } from "react";
import { markDone, setLastOpen } from "../../utils/progress";

export default function Quiz({ courseId }) {
  useEffect(() => {
    markDone(courseId, "quiz");
    setLastOpen(courseId, "quiz");
  }, [courseId]);

  return <div className="glass"><h2>Quiz</h2></div>;
}
