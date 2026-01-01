import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { markDone } from "../../../utils/progress";

const QUIZ = {
  1: { q: "Which is a digital channel?", a: ["TV", "SEO", "Newspaper"], c: 1 },
  2: { q: "Paid ads example?", a: ["SEO", "Google Ads", "Blog"], c: 1 },
};

export default function Quiz() {
  const { id } = useParams();
  markDone(id, "quiz");

  const q = QUIZ[id];

  if (!q) {
    return (
      <div style={{ padding: 32 }}>
        <p>No quiz found.</p>
        <Link to={`/course/module/${id}`}>← Back</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 32 }}>
      <h2>{q.q}</h2>
      <ul>
        {q.a.map((o, i) => <li key={i}>{o}</li>)}
      </ul>

      <Link to={`/course/module/${id}`}>← Back to Module</Link>
    </div>
  );
}
