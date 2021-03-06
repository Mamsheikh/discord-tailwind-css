import { objectType } from 'nexus';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.string('name'),
      t.string('email'),
      t.string('phone'),
      t.boolean('isAdmin'),
      t.list.field('servers', {
        type: 'Server',
      });
  },
});
