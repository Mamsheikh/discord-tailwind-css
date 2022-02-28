import { objectType } from 'nexus';

export const Message = objectType({
  name: 'Message',
  definition(t) {
    t.nonNull.string('id'),
      t.nonNull.string('text'),
      t.nonNull.string('userId');
    t.nonNull.string('channelId'),
      t.field('channel', {
        type: 'Channel',
      });
  },
});
