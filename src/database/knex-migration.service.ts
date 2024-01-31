import { Injectable } from '@nestjs/common';
import Knex from 'knex';
import { MIGRATION_ERROR } from 'src/shared/constants/db.errors.constant';
import knexConfig from './../../knexfile';

@Injectable()
export class MigrationService {
  private knexInstance: any;

  constructor() {
    this.knexInstance = Knex(knexConfig['development']);
  }

  async showConnection(): Promise<void> {
    try {
      const connectionConfig = this.knexInstance.client.config;
      console.log('Connection Configuration:', connectionConfig);
    } catch (error) {
      console.error('connection error', error);
      throw error;
    }
  }

  async runAllMigrations(): Promise<void> {
    try {
      await this.knexInstance.migrate.latest();
    } catch (error) {
      console.error(MIGRATION_ERROR, error);
      throw error;
    }
  }
}
