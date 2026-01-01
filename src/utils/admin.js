import { getUser } from "./auth";

export function isAdmin() {
  const user = getUser();
  if (!user) return false;

  // TEMP RULE: make yourself admin
  return user.email === "admin@scaleshift.com";
}
