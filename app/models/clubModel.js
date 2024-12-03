import { DataTypes, Model } from "sequelize";
import { sequelize } from "./sequelize-client.js";

export class Club extends Model {}

Club.init(
  {
    club_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "club",
  }
);
