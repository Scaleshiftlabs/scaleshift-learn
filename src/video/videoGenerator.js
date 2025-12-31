/**
 * VIDEO GENERATION CONTRACT
 * This file simulates video creation.
 * Replace internals later with real AI pipelines.
 */

export function generateLessonVideo({
  courseId,
  moduleIndex,
  lessonIndex,
  script,
  durationMinutes
}) {
  const duration = durationMinutes * 60;

  return {
    url: `/videos/${courseId}/m${moduleIndex + 1}-l${lessonIndex + 1}.mp4`,
    duration
  };
}
