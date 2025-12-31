import { getPublished, listPublishedVersions } from "../publish/publishedStorage";
import { attachVideosToCourse } from "../video/attachVideos";

export function loadLatestPublishedCourse(courseId) {
  const versions = listPublishedVersions(courseId);
  if (!versions.length) return null;

  const latestVersion = versions.sort().slice(-1)[0];
  const course = getPublished(courseId, latestVersion);

  return attachVideosToCourse(courseId, course);
}
