import { Knex } from 'knex';
import { ASSESSMENTS_TABLE_NAME } from '../constants/tables.constant';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(ASSESSMENTS_TABLE_NAME, function (table) {
    table.increments('id').primary();
    table.string('name', 255).notNullable();
    table.integer('users_resolved').defaultTo(0);
    table.boolean('active').defaultTo(true);
    table.string('image_url', 255);
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(ASSESSMENTS_TABLE_NAME);
}
