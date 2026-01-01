import { useParams, Link } from "react-router-dom";
import { useState } from "react";

const QUIZZES = {
  2: {
    title: "Marketing Channels — Quiz",
    questions: [
      {
        q: "Which of the following is a digital marketing channel?",
        options: ["Newspaper", "Billboard", "Instagram", "Pamphlet"],
        answer: 2
      },
      {
        q: "SEO is an example of which type of channel?",
        options: ["Paid", "Organic", "Offline", "Traditional"],
        answer: 1
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
        <p>No quiz available.</p>
        <Link to={`/course/module/${id}`}>← Back to Module</Link>
      </div>
    );
  }

  const score = quiz.questions.reduce(
    (acc, q, i) => acc + (selected[i] === q.answer ? 1 : 0),
    0
  );

  return (
    <div style={{ padding: 32, color: "white", maxWidth: 800 }}>
      <h1>{quiz.title}</h1>

      {quiz.questions.map((q, qi) => (
        <div
          key={qi}
          style={{
            marginTop: 20,
            padding: 16,
            border: "1px solid #334155",
            borderRadius: 8
          }}
        >
          <p><strong>{qi + 1}. {q.q}</strong></p>
          {q.options.map((opt, oi) => (
            <label key={oi} style={{ display: "block", marginTop: 6 }}>
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
          onClick={() => setSubmitted(true)}
          style={{ marginTop: 24, padding: "8px 16px" }}
        >
          Submit Quiz
        </button>
      )}

      {submitted && (
        <p style={{ marginTop: 16 }}>
          Score: <strong>{score}/{quiz.questions.length}</strong>
        </p>
      )}

      <div style={{ marginTop: 32 }}>
        <Link to={`/course/module/${id}`}>← Back to Module</Link>
      </div>
    </div>
  );
}
