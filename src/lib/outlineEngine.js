export function generateOutline({ title, audience, goal }) {
  return {
    modules: [
      {
        title: "Introduction & Foundations",
        lessons: [
          `What is ${title || "this course"}?`,
          "Who this course is for",
          "Expected outcomes"
        ]
      },
      {
        title: "Core Concepts",
        lessons: [
          "Key principles explained",
          "Tools and techniques",
          "Common mistakes"
        ]
      },
      {
        title: "Practical Application",
        lessons: [
          "Real-world examples",
          "Hands-on walkthrough",
          "Best practices"
        ]
      },
      {
        title: "Advanced Strategies",
        lessons: [
          `Advanced methods for ${audience || "learners"}`,
          "Optimization techniques",
          "Scaling strategies"
        ]
      },
      {
        title: "Final Project & Next Steps",
        lessons: [
          goal || "Apply what you've learned",
          "Career / growth roadmap",
          "Bonus resources"
        ]
      }
    ]
  };
}
