import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TasksProviders } from './tasks.providers';
import { DatabaseModule } from 'src/database/database.modules';

@Module({
  imports:[DatabaseModule],
  controllers: [TasksController],
  providers: [TasksService,...TasksProviders],
})
export class TasksModule {}
