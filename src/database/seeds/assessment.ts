import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('assessments').del();

  await knex('assessments').insert([
    { name: 'Core Drivers', users_resolved: 5, active: true, image_url: 'https://d1cuxz3dnd9slg.cloudfront.net/assessments/Core+Values+-+Cover+Photo.jpg___2020-05-15-14-13-06.jpg' },
  ]);
}
