import { DataTypes, Model } from "sequelize";
import { sequelize } from "./sequelize-client.js";

export class match extends Model {}

match.init(
  {
    meeting: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "matchs",
  }
);
