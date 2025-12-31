export function isCourseComplete(course, progress) {
  const modules = course.data.course.modules;

  for (let m = 0; m < modules.length; m++) {
    const lessons = modules[m].lessons;
    for (let l = 0; l < lessons.length; l++) {
      if (!progress[m] || !progress[m][l]) {
        return false;
      }
    }
  }

  return true;
}
