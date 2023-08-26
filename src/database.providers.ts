import { Provider } from '@nestjs/common';
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'db.sqlite',
});

export const databaseProviders: Provider[] = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      await sequelize.authenticate();
      await sequelize.sync();

      return sequelize;
    },
  },
];
