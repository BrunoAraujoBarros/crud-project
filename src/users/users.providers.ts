import { DataSource } from 'typeorm';
import { user } from './user.entity';

export const UserProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(user),
    inject: ['DATA_SOURCE'],
  },
];