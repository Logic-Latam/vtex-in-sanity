export const footer = async (_: unknown, __: unknown, ctx: Context) => {
  const {
    clients: { sanity },
  } = ctx;

  const settings = await ctx.clients.apps.getAppSettings(`${process.env.VTEX_APP_ID}`);

  return sanity.footer(settings);
};
