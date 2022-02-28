import { objectType } from 'nexus';

export const Channel = objectType({
  name: 'Channel',
  definition(t) {
    t.nonNull.string('id'),
      t.nonNull.boolean('public'),
      t.nonNull.string('serverId'),
      t.nonNull.field('server', {
        type: 'Server',
      }),
      t.list.field('messages', {
        type: 'Message',
      });
  },
});
