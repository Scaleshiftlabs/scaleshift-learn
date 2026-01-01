import { useParams, Link } from "react-router-dom";
import { useState } from "react";

const QUIZZES = {
  1: {
    title: "Digital Marketing Basics — Quick Quiz",
    questions: [
      {
        q: "What is digital marketing?",
        options: [
          "Marketing using digital channels like websites and social media",
          "Only running ads on TV",
          "Selling products in physical shops only",
          "Calling customers on phone"
        ],
        answer: 0
      },
      {
        q: "Which of the following is a digital marketing channel?",
        options: [
          "Newspaper",
          "Billboard",
          "Instagram",
          "Pamphlet"
        ],
        answer: 2
      },
      {
        q: "Why do businesses like digital marketing?",
        options: [
          "It is cheaper and measurable",
          "It works only for big companies",
          "It cannot reach many people",
          "It replaces products"
        ],
        answer: 0
      }
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
        <p>No quiz found for this module.</p>
        <Link to={`/course/module/${id}`}>← Back to Module</Link>
      </div>
    );
  }

  const score = quiz.questions.reduce((acc, q, i) => {
    return acc + (selected[i] === q.answer ? 1 : 0);
  }, 0);

  return (
    <div style={{ padding: 32, color: "white", maxWidth: 900 }}>
      <h1>{quiz.title}</h1>

      {quiz.questions.map((q, qi) => (
        <div key={qi} style={{ marginTop: 24 }}>
          <p><strong>{qi + 1}. {q.q}</strong></p>
          {q.options.map((opt, oi) => (
            <label key={oi} style={{ display: "block", marginBottom: 6 }}>
              <input
                type="radio"
                name={`q-${qi}`}
                disabled={submitted}
                onChange={() => setSelected({ ...selected, [qi]: oi })}
              />{" "}
              {opt}
            </label>
          ))}
        </div>
      ))}

      {!submitted && (
        <button
          style={{ marginTop: 24, padding: "8px 16px" }}
          onClick={() => setSubmitted(true)}
        >
          Submit Quiz
        </button>
      )}

      {submitted && (
        <div style={{ marginTop: 24 }}>
          <p>
            Your score: <strong>{score} / {quiz.questions.length}</strong>
          </p>
          <p>
            {score >= 2
              ? "Good job! You understand the basics."
              : "No worries. Rewatch the videos and try again."}
          </p>
        </div>
      )}

      <div style={{ marginTop: 40 }}>
        <Link to={`/course/module/${id}`}>← Back to Module</Link>
      </div>
    </div>
  );
}
