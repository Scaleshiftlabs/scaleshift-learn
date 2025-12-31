export function validateCourse(course) {
  if (!course || !course.course) {
    return "Invalid root structure";
  }

  const c = course.course;

  if (!Array.isArray(c.modules) || c.modules.length !== 10) {
    return "Course must contain exactly 10 modules";
  }

  for (let i = 0; i < c.modules.length; i++) {
    const m = c.modules[i];

    if (!m.title || !Array.isArray(m.lessons)) {
      return \`Module \${i + 1} missing title or lessons\`;
    }

    if (m.lessons.length < 3 || m.lessons.length > 5) {
      return \`Module \${i + 1} must have 3–5 lessons\`;
    }

    if (!m.quiz || !Array.isArray(m.quiz.questions)) {
      return \`Module \${i + 1} missing quiz\`;
    }

    if (m.quiz.questions.length !== 5) {
      return \`Module \${i + 1} quiz must have 5 questions\`;
    }

    if (!m.assignment || !m.assignment.description) {
      return \`Module \${i + 1} missing assignment\`;
    }
  }

  if (!c.capstone_project || !c.capstone_project.description) {
    return "Capstone project missing";
  }

  return null; // valid
}
