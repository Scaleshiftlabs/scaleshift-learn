const BASE_URL = import.meta.env.VITE_API_BASE || ''

function getAuthHeader() {
  try {
    const u = JSON.parse(localStorage.getItem('scaleshift_user'))
    return u ? { Authorization: 'Bearer mock-token' } : {}
  } catch {
    return {}
  }
}

async function request(path, options = {}) {
  const res = await fetch(BASE_URL + path, {
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeader(),
      ...(options.headers || {})
    },
    ...options
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || 'API Error')
  }

  if (res.status === 204) return null
  return res.json()
}

export const api = {
  get: (path) => request(path),
  post: (path, body) =>
    request(path, { method: 'POST', body: JSON.stringify(body) }),
  put: (path, body) =>
    request(path, { method: 'PUT', body: JSON.stringify(body) }),
  del: (path) => request(path, { method: 'DELETE' })
}
