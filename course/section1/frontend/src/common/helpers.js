export const getImage = (image) => {
  const path = `../assets/img/${image}`;
  return new URL(path, import.meta.url).href;
};
