import { useParams, Link } from "react-router-dom";
import { useState } from "react";

const QUIZZES = {
  6: {
    title: "Final Review Quiz",
    questions: [
      {
        q: "What is the first step in a digital marketing project?",
        options: ["Target audience", "Running ads", "Spending money", "Posting randomly"],
        answer: 0
      },
      {
        q: "Why is measurement important?",
        options: ["To improve results", "To waste time", "To confuse data", "To stop campaigns"],
        answer: 0
      },
      {
        q: "Which skill is most important for marketers?",
        options: ["Learning & adapting", "Guessing", "Copying others", "Avoiding data"],
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
        <p>No quiz found.</p>
        <Link to={`/course/module/${id}`}>← Back to Module</Link>
      </div>
    );
  }

  const score = quiz.questions.reduce(
    (acc, q, i) => acc + (selected[i] === q.answer ? 1 : 0),
    0
  );

  return (
    <div style={{ padding: 32, color: "white" }}>
      <h1>{quiz.title}</h1>

      {quiz.questions.map((q, qi) => (
        <div key={qi}>
          <p>{q.q}</p>
          {q.options.map((opt, oi) => (
            <label key={oi} style={{ display: "block" }}>
              <input
                type="radio"
                name={`q-${qi}`}
                disabled={submitted}
                onChange={() => setSelected({ ...selected, [qi]: oi })}
              /> {opt}
            </label>
          ))}
        </div>
      ))}

      {!submitted && <button onClick={() => setSubmitted(true)}>Submit</button>}

      {submitted && (
        <p>
          Final Score: <strong>{score}/{quiz.questions.length}</strong>
        </p>
      )}

      <Link to={`/course/module/${id}`}>← Back to Module</Link>
    </div>
  );
}
