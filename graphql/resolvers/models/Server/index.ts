import { objectType } from 'nexus';

export const Server = objectType({
  name: 'Server',
  definition(t) {
    t.nonNull.string('id'),
      t.nonNull.string('name'),
      t.nullable.string('image'),
      t.nonNull.string('userId'),
      t.list.field('users', {
        type: 'User',
      }),
      t.list.field('channels', {
        type: 'Channel',
      });
  },
});
