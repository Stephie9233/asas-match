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
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    poste: {
      type: DataTypes.INTEGER,
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
    club_id: { // Vérifiez si le nom ici correspond à votre base
      type: DataTypes.INTEGER,
      references: {
        model: 'clubs', // Nom de la table de référence
        key: 'id',
      },
    },
  },
  {
    sequelize,
    tableName: "persons",
  }
);
