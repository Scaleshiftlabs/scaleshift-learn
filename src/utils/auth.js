import { supabase } from "./supabase";

const USER_KEY = "scaleshift_user_v1";

export async function login(email) {
  // optional Supabase auth
  try {
    await supabase.auth.signInWithOtp({ email });
  } catch (e) {}

  const user = { email };
  localStorage.setItem(USER_KEY, JSON.stringify(user));

  /* ---- SAFE REHYDRATION ---- */
  const localKey = `progress_${email}`;
  const existing = JSON.parse(localStorage.getItem(localKey) || "{}");

  const { data: rows } = await supabase
    .from("progress")
    .select("course_id, data")
    .eq("user_email", email);

  // Merge, NEVER overwrite with empty
  const merged = { ...existing };

  if (rows && rows.length) {
    rows.forEach(r => {
      if (r.data && Object.keys(r.data).length) {
        merged[r.course_id] = r.data;
      }
    });
  }

  localStorage.setItem(localKey, JSON.stringify(merged));

  return user;
}

export function logout() {
  supabase.auth.signOut();
  localStorage.removeItem(USER_KEY);
}

export function getUser() {
  return JSON.parse(localStorage.getItem(USER_KEY) || "null");
}
