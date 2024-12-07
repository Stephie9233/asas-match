import { DataTypes, Model } from "sequelize";
import { sequelize } from "./sequelize-client.js";

export class Championships extends Model {}

Championships.init(
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
    tableName: "championships",
  }
);
