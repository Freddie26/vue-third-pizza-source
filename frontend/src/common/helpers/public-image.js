export const getPublicImage = (path) => {
  const divider = path.startsWith("/") ? "" : "/";
  return `/api${divider}${path}`;
};
