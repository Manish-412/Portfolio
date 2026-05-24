export function getBaseUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  try {
    return siteUrl ? new URL(siteUrl).origin : "http://localhost:3000";
  } catch {
    return "http://localhost:3000";
  }
}
