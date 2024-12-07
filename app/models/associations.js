import { Person, Club } from "../models";

//One to Many 
//1 club => has N persons
// N persons => belongs to 1 club

Club.hasMany(Person);
Person.belongsTo(Club);
