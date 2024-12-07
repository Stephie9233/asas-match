import { DataTypes, Model } from "sequelize";
import { sequelize } from "./sequelize-client.js";

export class Experience extends Model {}

Experience.init(
  {
    season_begin: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    club: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "experiences",
  }
);
