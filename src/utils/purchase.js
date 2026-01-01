import { getUser } from "./auth";

function key() {
  const user = getUser();
  return user ? `purchases_${user.email}` : "purchases";
}

export function hasAccess(courseId) {
  const data = JSON.parse(localStorage.getItem(key()) || "{}");
  return !!data[courseId];
}

export function grantAccess(courseId) {
  const data = JSON.parse(localStorage.getItem(key()) || "{}");
  data[courseId] = {
    purchasedAt: new Date().toISOString()
  };
  localStorage.setItem(key(), JSON.stringify(data));
}
