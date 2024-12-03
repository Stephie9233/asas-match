import "dotenv/config";
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.PG_URL, {
  // on va faire la correpondance des champs updatedAt et createdAt
  define: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
