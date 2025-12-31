import { COURSE_LIST } from "./courseList";
import { generateCourse } from "../ai/generateCourse";
import { saveDraft } from "./draftStorage";

/**
 * aiResponses is a map:
 * {
 *   "DM-001": <AI JSON>,
 *   "AI-001": <AI JSON>
 * }
 */
export async function runBatch(aiResponses) {
  const results = [];

  for (const course of COURSE_LIST) {
    try {
      console.log("Processing:", course.course_id);

      const aiJson = aiResponses[course.course_id];
      if (!aiJson) {
        throw new Error("Missing AI response");
      }

      const generated = await generateCourse(course, aiJson);
      saveDraft(course.course_id, generated);

      results.push({
        course_id: course.course_id,
        status: "success"
      });
    } catch (err) {
      console.error("Failed:", course.course_id, err.message);
      results.push({
        course_id: course.course_id,
        status: "failed",
        error: err.message
      });
    }
  }

  return results;
}
