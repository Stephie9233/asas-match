import { DataTypes, Model } from "sequelize";
import { sequelize } from "./sequelize-client.js";

export class Rewards extends Model {}

Rewards.init(
  {
    season_begin: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    championship: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    reward: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "rewards",
  }
);
