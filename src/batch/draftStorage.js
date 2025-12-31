export function saveDraft(courseId, data) {
  const key = "scaleshift-draft-" + courseId;
  localStorage.setItem(key, JSON.stringify(data, null, 2));
}

export function getDraft(courseId) {
  const key = "scaleshift-draft-" + courseId;
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : null;
}
