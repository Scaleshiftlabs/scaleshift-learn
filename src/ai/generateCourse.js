import { MASTER_COURSE_PROMPT } from "./masterPrompt";
import { validateCourse } from "./courseValidator";

// Placeholder: replace with real LLM call later
export async function generateCourse(inputs, aiResponseJson) {
  const validationError = validateCourse(aiResponseJson);

  if (validationError) {
    throw new Error(validationError);
  }

  return {
    courseId: inputs.course_id,
    status: "draft",
    createdAt: new Date().toISOString(),
    data: aiResponseJson
  };
}
