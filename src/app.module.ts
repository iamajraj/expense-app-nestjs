import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import { usersProviders } from './users.providers';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MainController } from './main.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, UsersController, MainController],
  providers: [AppService, UsersService, ...usersProviders],
})
export class AppModule {}
