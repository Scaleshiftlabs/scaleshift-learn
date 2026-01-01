import { useParams, Link } from "react-router-dom";
import { useState } from "react";

const QUIZ = {
  1: ["Instagram", "Newspaper", "Billboard", "Pamphlet"],
  2: ["Instagram", "Radio", "Poster", "Notebook"],
  3: ["Blog", "Billboard", "Pamphlet", "Poster"],
  4: ["Google Ads", "Radio", "Pamphlet", "Notebook"],
  5: ["Website Visitors", "Rent", "Electric Bill", "Paper"],
  6: ["Target Audience", "Guessing", "Random Ads", "Ignoring Data"]
};

export default function Quiz() {
  const { id } = useParams();
  const options = QUIZ[id];
  const [selected, setSelected] = useState(null);

  if (!options) {
    return <div style={{ padding: 32 }}>No quiz available</div>;
  }

  return (
    <div style={{ padding: 32, maxWidth: 600, margin: "0 auto" }}>
      <h1>Quiz</h1>
      <p style={{ opacity: 0.8 }}>Choose the correct answer</p>

      <div style={{ marginTop: 20 }}>
        {options.map((o, i) => (
          <label
            key={i}
            style={{
              display: "block",
              padding: 12,
              marginBottom: 10,
              borderRadius: 8,
              border: "1px solid #1e293b",
              background: selected === i ? "#38bdf8" : "#020617",
              color: selected === i ? "#020617" : "#e5e7eb",
              cursor: "pointer"
            }}
          >
            <input
              type="radio"
              name="quiz"
              style={{ marginRight: 10 }}
              onChange={() => setSelected(i)}
            />
            {o}
          </label>
        ))}
      </div>

      <div style={{ marginTop: 24 }}>
        <Link to={`/course/module/${id}`}>← Back to Module</Link>
      </div>
    </div>
  );
}
