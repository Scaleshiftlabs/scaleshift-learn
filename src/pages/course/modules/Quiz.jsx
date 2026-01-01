import { useParams, Link } from "react-router-dom";
import { useState } from "react";

const QUIZZES = {
  1: {
    title: "Digital Marketing Basics — Quick Quiz",
    questions: [
      { q: "What is digital marketing?", options: ["Online marketing", "TV ads", "Shop sales", "Cold calls"], answer: 0 },
      { q: "Which is a digital channel?", options: ["Billboard", "Instagram", "Pamphlet", "Newspaper"], answer: 1 },
      { q: "Why businesses like digital marketing?", options: ["Cheap & measurable", "Only big brands", "Limited reach", "Offline only"], answer: 0 }
    ]
  },
  2: {
    title: "Digital Marketing Channels — Quick Quiz",
    questions: [
      { q: "Which is an organic channel?", options: ["Google Ads", "Facebook Ads", "SEO", "Banner ads"], answer: 2 },
      { q: "Paid channels mainly help in?", options: ["Instant reach", "Free traffic", "Slow growth", "No tracking"], answer: 0 },
      { q: "Which is a social media channel?", options: ["Email", "Instagram", "Website", "SMS"], answer: 1 }
    ]
  }
};

export default function Quiz() {
  const { id } = useParams();
  const quiz = QUIZZES[id];
  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState(false);

  if (!quiz) {
    return (
      <div style={{ padding: 32, color: "white" }}>
        <p>No quiz found.</p>
        <Link to={`/course/module/${id}`}>← Back to Module</Link>
      </div>
    );
  }

  const score = quiz.questions.reduce((acc, q, i) => acc + (selected[i] === q.answer ? 1 : 0), 0);

  return (
    <div style={{ padding: 32, color: "white", maxWidth: 900 }}>
      <h1>{quiz.title}</h1>

      {quiz.questions.map((q, qi) => (
        <div key={qi} style={{ marginTop: 24 }}>
          <p><strong>{qi + 1}. {q.q}</strong></p>
          {q.options.map((opt, oi) => (
            <label key={oi} style={{ display: "block" }}>
              <input type="radio" name={`q-${qi}`} disabled={submitted}
                onChange={() => setSelected({ ...selected, [qi]: oi })} /> {opt}
            </label>
          ))}
        </div>
      ))}

      {!submitted && (
        <button style={{ marginTop: 24 }} onClick={() => setSubmitted(true)}>
          Submit Quiz
        </button>
      )}

      {submitted && (
        <p style={{ marginTop: 16 }}>
          Your score: <strong>{score}/{quiz.questions.length}</strong>
        </p>
      )}

      <div style={{ marginTop: 40 }}>
        <Link to={`/course/module/${id}`}>← Back to Module</Link>
      </div>
    </div>
  );
}
