export default function sitemap() {
  const staticRoutes = [
    "",
    "/blog",
    "/contact-me",
    "/blog/Ancient-massage",
    "/blog/Chronic-pains",
    "/blog/massage",
    "/blog/Massage-off-fitness",
    "/blog/Swedish-massage",
    "/blog/Thai-massage",
    "/blog/Toksentorapi",
  ];
  const routes = staticRoutes.map((route) => ({
    url: `https://maryam-khalili.ir${route}`,
    lastModified: new Date().toString(),
    priority: 1,
  }));
  return [...routes];
}
