import { validateForPublish } from "./publishValidator";
import { savePublished, listPublishedVersions } from "./publishedStorage";

export function publishCourse(courseId, draft) {
  const error = validateForPublish(draft);
  if (error) {
    throw new Error(error);
  }

  const existingVersions = listPublishedVersions(courseId);
  const nextVersion = `v${existingVersions.length + 1}`;

  savePublished(courseId, nextVersion, {
    ...draft,
    status: "published",
    version: nextVersion,
    publishedAt: new Date().toISOString()
  });

  return nextVersion;
}
