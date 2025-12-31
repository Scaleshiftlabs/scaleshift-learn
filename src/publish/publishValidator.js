export function validateForPublish(draft) {
  if (!draft || !draft.data || !draft.data.course) {
    return "Invalid draft data";
  }

  const course = draft.data.course;

  if (!Array.isArray(course.modules) || course.modules.length !== 10) {
    return "Course must have exactly 10 modules";
  }

  for (let i = 0; i < course.modules.length; i++) {
    const m = course.modules[i];

    if (!m.lessons || m.lessons.length < 3) {
      return `Module ${i + 1} has insufficient lessons`;
    }

    if (!m.quiz || !m.quiz.questions || m.quiz.questions.length !== 5) {
      return `Module ${i + 1} quiz incomplete`;
    }

    if (!m.assignment || !m.assignment.description) {
      return `Module ${i + 1} assignment missing`;
    }
  }

  if (!course.capstone_project) {
    return "Capstone project missing";
  }

  return null;
}
