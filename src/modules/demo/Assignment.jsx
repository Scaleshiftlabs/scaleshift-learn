import { useEffect } from "react";
import { markDone, setLastOpen } from "../../utils/progress";

export default function Assignment({ courseId }) {
  useEffect(() => {
    markDone(courseId, "assignment");
    setLastOpen(courseId, "assignment");
  }, [courseId]);

  return <div className="glass"><h2>Assignment</h2></div>;
}
