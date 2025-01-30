import { Person } from "../models/associations.js";

export const adminPersonsController = {

  async renderMembersPage(req, res) {
    const members = await Person.findAll();
    //console.log(members);
    const css = "adminMembers";
    
    res.render("adminMembers", {members, css});
  },

  async renderMembersSearch(req, res) {
    const css = "adminMembers";
    //console.log(req.query);    
    const membersList = await Person.findAll();
    const {firstname} = req.query;
    const {lastname} = req.query ;
    // console.log(`membersList : ${JSON.stringify(membersList)}`);
    // console.log(`firstname : ${firstname}`);
    // console.log(`lastname : ${lastname}`);    
    const members = [];
    membersList.forEach((member) => member.lastname === lastname ? members.push(member) : member.firstname === firstname ? members.push(member) : "");
    console.log(`members : ${JSON.stringify(members)}`);        
    res.render("adminMembers", {members, css});
  },

  async renderAddMember(req, res) {
    const css = "addMember";
    const members = await Person.findAll();
    res.render("adminPerson", {css, members});
  },

  async addMember(req, res) {
    const css = "addMember";
    //console.log(JSON.stringify(req.body));
    
    const {firstname, lastname, birthdate, height, rule, picture} = req.body;
    console.log(firstname, lastname, birthdate, height, rule, picture);
    const members = await Person.findAll();
    const foundMember = members.find(member => member.firstname == firstname && member.lastname == lastname);
    console.log(foundMember);
    if(!foundMember) {
      const newMember = new Person({rule: rule, firstname: firstname, lastname: lastname});
      newMember.save();
      res.redirect("/membres");
    }
    console.log("erreur");
    
  },
  
  // async getDetails(req, res) {
  //   const css = "details";
  //   const idPerson = req.params.id;
  //   const person = await Person.findByPk(idPerson);
  //   console.log(person);

  //   const details = await Details.findOne({ where: { person_id: idPerson } });
  //   console.log(details);
  //   let history;
  //   if (details) {
  //     return history = await Experience.findAll({
  //       where: { details_id: details.id },
  //     });
  //   }
  //   let rewards;
  //   const imgName = person.lastname.replace(" ", "").toLocaleLowerCase();
  //   const img = `/img/persons/${imgName}.png`;
  //   console.log(img);
    

  //   res.render("adminPerson.ejs", { img, person, details, history, rewards, css });
  // },

  async setDetails(req, res) {
    const css = "updateDetails";
    const idPerson = req.params.id;
    const person = await Person.findByPk(idPerson);
    res.render("getDetails", { person, css });
  }
};
