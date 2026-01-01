import { getUser } from "./auth";

function key() {
  const user = getUser();
  return user ? `certificates_${user.email}` : "certificates";
}

export function issueCertificate(courseId) {
  const data = JSON.parse(localStorage.getItem(key()) || "[]");

  // prevent duplicate
  if (data.find(c => c.courseId === courseId)) return;

  data.push({
    certificateId: "CERT_" + Date.now(),
    courseId,
    issuedAt: new Date().toISOString()
  });

  localStorage.setItem(key(), JSON.stringify(data));
}

export function getCertificates() {
  return JSON.parse(localStorage.getItem(key()) || "[]");
}

export function hasCertificate(courseId) {
  return getCertificates().some(c => c.courseId === courseId);
}
