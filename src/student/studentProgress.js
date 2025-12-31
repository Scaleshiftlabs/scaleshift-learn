const KEY = "bb001-progress";

export function getProgress() {
  const saved = localStorage.getItem(KEY);
  return saved
    ? JSON.parse(saved)
    : { currentDecision: "D1", completed: false };
}

export function setProgress(decisionId) {
  localStorage.setItem(
    KEY,
    JSON.stringify({ currentDecision: decisionId, completed: false })
  );
}

export function markCourseComplete() {
  localStorage.setItem(
    KEY,
    JSON.stringify({ currentDecision: "DONE", completed: true })
  );
}
