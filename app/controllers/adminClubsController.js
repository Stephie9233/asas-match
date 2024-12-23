import { Person } from "../models/associations.js";
import { Club } from "../models/clubModel.js";

export const adminClubsController = {
  async renderClubsPage(req, res) {
    let clubs = await Club.findAll();
    console.log(clubs);

    const css = "clubs";
    res.render("adminClubs", { clubs, css });
  },

  addClub(req, res) {
    const css = "addClub";
    res.render("addClub", { css });
  },

  async verifyDatas(req, res) {
    const club_name = req.body.club_name;
    console.log(club_name);

    const clubs = await Club.findAll();
    const foundClub = clubs.find((club) => club.club_name === club_name);
    console.log(foundClub);
    if (!foundClub) {
      const newClub = new Club({ club_name: club_name });
      newClub.save();
      res.redirect("/clubs");
    } else {
      console.log("club existant !");
      return;
    }
  },

  async getDetails(req, res) {
    const css = "clubDetails";
    const id = req.params.id;
    //console.log(id);
    const club = await Club.findByPk(id);
    console.log(club);
    const players = await Person.findAll({
      where: {
        club_id: id,
        rule: 'player',
      },
    });
    console.log(players);
    const staff = await Person.findAll({
      where: {
        club_id: id,
        rule: ['coach', 'helper', 'pdg'],
      },
    });
    console.log(staff);
    
    

    res.render("clubDetails", { club, players, staff, css });
  },

  async addMember(req, res) {
    const id = req.params.id;
    console.log(id);
    const {rule} = req.body;
    const {shirt} = req.body;
    const {poste} = req.body;
    const {firstname} = req.body;
    const {lastname} = req.body;
    const person = await Person.findOne({where: {club_id: id, firstname: firstname, lastname: lastname}});
    console.log(person);
    if (!person) {
      const newPerson = new Person({ rule: rule, shirt: shirt, poste: poste, firstname: firstname, lastname: lastname, club_id: id });
      newPerson.save();
      res.redirect(`/club/${id}`);
    } else {
      console.log("Ce membre existe !");
      return;
    }
    
  }
};