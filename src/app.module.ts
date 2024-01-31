import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './controllers/auth/auth.controller';
import { DashboardController } from './controllers/user/dashboard.controller';
import { MigrationService } from './database/knex-migration.service';
import { UserController } from './controllers/user/user.controller';

@Module({
  imports: [],
  controllers: [AppController, AuthController, DashboardController, UserController],
  providers: [AppService, MigrationService],
})
export class AppModule {}
