import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('user_assessment_results').del();

  await knex('user_assessment_results').insert([
    { user_id: 1, assessment_id: 1, agreeableness: 13.33, drive: 21.67, luck: 10, openness: 30 },
  ]);
}
