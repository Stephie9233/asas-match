import { DataTypes, Model } from "sequelize";
import { sequelize } from "./sequelize-client.js";

export class Details extends Model {}

Details.init(
  {
    height: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    birthdate: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "details",
  }
);
