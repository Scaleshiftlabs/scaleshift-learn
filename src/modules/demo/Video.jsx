import { useEffect } from "react";
import { markDone, setLastOpen } from "../../utils/progress";

export default function Video({ courseId }) {
  useEffect(() => {
    markDone(courseId, "video");
    setLastOpen(courseId, "video");
  }, [courseId]);

  return <div className="glass"><h2>Video</h2></div>;
}
