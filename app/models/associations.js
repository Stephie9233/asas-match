import { Club } from "./clubModel.js";
import { Person } from "./personsModel.js";
import { Details } from "./detailsModel.js";
import { Experience } from "./experiencesModel.js";
import { Rewards } from "./rewardsModel.js";

//One to Many
// 1 club => has N persons
// N persons => belongs to 1 club

Club.hasMany(Person, {foreignKey: "club_id"});
Person.belongsTo(Club, {foreignKey: "club_id"});

//One to One
// 1 person => has one details
// 1 details => belongs to 1 person
Person.hasOne(Details);
Details.belongsTo(Person);

//One to many
// 1 Details => has many experiences
// Many Experiences => belongs to 1 Details
Details.hasMany(Experience);
Experience.belongsTo(Details);

//Many to many
// Many Persons => has many rewards
// Many Rewards => belongs to many Persons

Rewards.belongsToMany(Person, {
  through: "persons_has_rewards",
});
Person.belongsToMany(Rewards, {
  through: "persons_has_rewards",
});


export { Club, Person, Details, Experience, Rewards };