import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('user').del();

  const password = '$2a$10$0oJeAx4mRDlgOAhClvY3BOD7p3zaG6UZ77zgZnrsfBtgk5/ADl0By'; // bcrypt 10

  await knex('user').insert([
    { email: 'admin@deepersignals.com', password, first_name: 'Admin', last_name: 'Deepersignals', role: 'Admin' },
    { email: 'user@deepersignals.com', password, first_name: 'User', last_name: 'Deepersignals', role: 'User' },
  ]);
}
