export const sanityContent = async (
  _: unknown,
  args: {
    query: string;
  },
  ctx: Context
) => {
  const {
    clients: { sanity },
  } = ctx;

  const settings = await ctx.clients.apps.getAppSettings(`${process.env.VTEX_APP_ID}`);

  return sanity.getSanityContent(settings, args.query);
};
