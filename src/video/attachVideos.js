import { generateLessonVideo } from "./videoGenerator";

export function attachVideosToCourse(courseId, publishedCourse) {
  const modules = publishedCourse.data.course.modules;

  modules.forEach((module, mi) => {
    module.lessons.forEach((lesson, li) => {
      lesson.video = generateLessonVideo({
        courseId,
        moduleIndex: mi,
        lessonIndex: li,
        script: lesson.video_script,
        durationMinutes: lesson.estimated_duration_minutes || 8
      });
    });
  });

  return publishedCourse;
}
