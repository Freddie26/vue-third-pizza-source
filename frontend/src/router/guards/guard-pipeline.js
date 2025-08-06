export const guardPipeline = (router) => {
  router.beforeEach(async (to, from) => {
    const guards = to.meta.guards;
    if (!guards) {
      return true;
    }
    for (const guard of guards) {
      const result = await guard({ to, from });
      if (
        typeof result === "object" ||
        typeof result === "string" ||
        result === false
      ) {
        return result;
      }
    }
    return true;
  });
};
