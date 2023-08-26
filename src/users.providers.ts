import { User } from './user.entity';

export const usersProviders = [
  {
    provide: 'USERS_REPO',
    useValue: User,
  },
];
