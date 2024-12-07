import { DataTypes, Model } from "sequelize";
import { sequelize } from "./sequelize-client.js";

export class Experiences extends Model {}

Experiences.init(
  {
    season_begin: {
      type: DataTypes.INT,
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
