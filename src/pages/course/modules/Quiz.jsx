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
    return <div style={{ padding: 32, color: "white" }}>No quiz</div>;
  }

  return (
    <div style={{ padding: 32, color: "white" }}>
      <h1>Quiz</h1>
      <p>Select the correct option:</p>

      {options.map((o, i) => (
        <label key={i} style={{ display: "block" }}>
          <input type="radio" name="quiz" onChange={() => setSelected(i)} /> {o}
        </label>
      ))}

      <Link to={`/course/module/${id}`}>← Back to Module</Link>
    </div>
  );
}
