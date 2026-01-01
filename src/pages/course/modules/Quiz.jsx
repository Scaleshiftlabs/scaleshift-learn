import { useParams, Link } from "react-router-dom";
import { useState } from "react";

const QUIZZES = {
  5: {
    title: "Analytics Basics — Quiz",
    questions: [
      {
        q: "What does analytics help with?",
        options: ["Tracking performance", "Designing posters", "Making products", "Hiring staff"],
        answer: 0
      },
      {
        q: "Which is a common metric?",
        options: ["Website visitors", "Office rent", "Electric bill", "Paper cost"],
        answer: 0
      },
      {
        q: "Analytics helps businesses to?",
        options: ["Improve decisions", "Guess results", "Ignore data", "Stop marketing"],
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

      {submitted && <p>Score: {score}/{quiz.questions.length}</p>}

      <Link to={`/course/module/${id}`}>← Back to Module</Link>
    </div>
  );
}
