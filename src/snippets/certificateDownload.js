export async function logCertificateDownload(db, userId, courseId) {
  const { data: cert } = await db
    .from("certificates")
    .select("*")
    .eq("user_id", userId)
    .eq("course_id", courseId)
    .single();

  if (!cert) throw new Error("Certificate not found");

  await db.from("certificate_downloads").insert({
    certificate_id: cert.id
  });

  return cert;
}
