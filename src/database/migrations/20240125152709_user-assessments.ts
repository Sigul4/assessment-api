import { Knex } from "knex";
import { USER_ASSESSMENTS_TABLE_NAME } from "../constants/tables.constant";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(USER_ASSESSMENTS_TABLE_NAME, function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('user').onDelete('CASCADE');
      table.integer('assessment_id').unsigned().references('id').inTable('assessments').onDelete('CASCADE');
      table.float('agreeableness');
      table.float('drive');
      table.float('luck');
      table.float('openness');
      table.timestamps(true, true);
    });
  }
  
  export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(USER_ASSESSMENTS_TABLE_NAME);
  }