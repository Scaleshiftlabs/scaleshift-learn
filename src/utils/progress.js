import { getUser } from "./auth";
import { supabase } from "./supabase";

function userKey(base) {
  const user = getUser();
  return user ? `${base}_${user.email}` : base;
}

function read(base) {
  return JSON.parse(localStorage.getItem(userKey(base)) || "{}");
}

function write(base, data) {
  localStorage.setItem(userKey(base), JSON.stringify(data));
}

/* ---------- progress ---------- */
export async function markDone(courseId, type) {
  const user = getUser();
  if (!user) return;

  const data = read("progress");

  if (!data[courseId]) {
    data[courseId] = {
      video: false,
      assignment: false,
      quiz: false,
      handout: false
    };
  }

  data[courseId][type] = true;
  write("progress", data);

  await supabase.from("progress").upsert({
    user_email: user.email,
    course_id: courseId,
    data: data[courseId]
  });
}

export function getProgress(courseId) {
  const m = read("progress")[courseId];

  if (!m) return 0;

  const total = 4;
  const done =
    (m.video ? 1 : 0) +
    (m.assignment ? 1 : 0) +
    (m.quiz ? 1 : 0) +
    (m.handout ? 1 : 0);

  return Math.round((done / total) * 100);
}

export function isCourseComplete(courseId) {
  const m = read("progress")[courseId];
  return !!(m && m.video && m.assignment && m.quiz && m.handout);
}

/* ---------- resume ---------- */
export async function setLastOpen(courseId, type) {
  const user = getUser();
  if (!user) return;

  write("lastopen", { courseId, type });

  await supabase.from("resume").upsert({
    user_email: user.email,
    course_id: courseId,
    type
  });
}

export function getLastOpen() {
  return read("lastopen");
}
