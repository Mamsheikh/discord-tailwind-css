import { mutationField, nonNull, stringArg } from 'nexus';
import { getSession } from 'next-auth/react';
export const createServer = mutationField('createServer', {
  type: 'Server',
  args: {
    // userId: nonNull(stringArg()),
    name: nonNull(stringArg()),
  },
  resolve: async (_, args, ctx) => {
    const req = ctx.req;
    const session = await getSession({ req });
    // console.log(session);
    const user = await ctx.prisma.user.findUnique({
      where: { email: session.user.email },
    });
    const server = await ctx.prisma.server.create({
      data: {
        userId: user.id,
        name: args.name,
        image: '',
      },
    });
    return server;
  },
});
