import { useEffect } from "react";
import { markDone, setLastOpen } from "../../utils/progress";

export default function Handout({ courseId }) {
  useEffect(() => {
    markDone(courseId, "handout");
    setLastOpen(courseId, "handout");
  }, [courseId]);

  return <div className="glass"><h2>Handout</h2></div>;
}
