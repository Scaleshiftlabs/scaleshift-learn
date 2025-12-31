export function savePublished(courseId, version, data) {
  const key = `scaleshift-published-${courseId}-${version}`;
  localStorage.setItem(key, JSON.stringify(data, null, 2));
}

export function getPublished(courseId, version) {
  const key = `scaleshift-published-${courseId}-${version}`;
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : null;
}

export function listPublishedVersions(courseId) {
  const prefix = `scaleshift-published-${courseId}-`;
  return Object.keys(localStorage)
    .filter((k) => k.startsWith(prefix))
    .map((k) => k.replace(prefix, ""));
}
