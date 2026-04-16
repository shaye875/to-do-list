
import { Connection } from 'mongoose';
import { TaskSchema} from './tasks.schema';

export const TasksProviders = [
  {
    provide: 'TASK_MODEL',
    useFactory: (connection: Connection) => connection.model('Task', TaskSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
