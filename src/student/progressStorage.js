export function markLessonComplete(courseId, version, moduleIndex, lessonIndex) {
  const key = `progress-${courseId}-${version}`;
  const progress = JSON.parse(localStorage.getItem(key) || "{}");

  if (!progress[moduleIndex]) {
    progress[moduleIndex] = {};
  }

  progress[moduleIndex][lessonIndex] = true;
  localStorage.setItem(key, JSON.stringify(progress));
}

export function getProgress(courseId, version) {
  const key = `progress-${courseId}-${version}`;
  return JSON.parse(localStorage.getItem(key) || "{}");
}
