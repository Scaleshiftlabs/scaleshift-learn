export function getAllLocal(prefix) {
  const out = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k.startsWith(prefix)) {
      out.push({
        key: k,
        value: JSON.parse(localStorage.getItem(k))
      });
    }
  }
  return out;
}
