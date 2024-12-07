import { DataTypes, Model } from "sequelize";
import { sequelize } from "./sequelize-client.js";

export class Persons extends Model {}

Persons.init(
  {
    rule: {
      type: DataTypes.VARCHAR(50),
      allowNull: false,
    },
    shirt: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    poste: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.VARCHAR(100),
      allowNull: false,
    },
    firstname: {
      type: DataTypes.VARCHAR(100),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "persons",
  }
);
