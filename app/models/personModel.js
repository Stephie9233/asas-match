import { DataTypes, Model } from "sequelize";
import { sequelize } from "./sequelize-client.js";

export class Person extends Model {}

Person.init(
  {
    rule: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    shirt: {
      type: DataTypes.INT,
      allowNull: true,
    },
    poste: {
      type: DataTypes.INT,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "person",
  }
);
