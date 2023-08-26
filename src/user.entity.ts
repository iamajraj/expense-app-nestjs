import { DataType } from 'sequelize-typescript';
import { sequelize } from './database.providers';
import { DataTypes } from 'sequelize';

export const User = sequelize.define(
  'User',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataType.NUMBER,
      allowNull: false,
    },
    email: {
      type: DataType.STRING,
      allowNull: false,
    },
  },
  {
    createdAt: true,
    updatedAt: true,
  },
);
