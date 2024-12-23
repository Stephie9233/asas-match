import { Person, Details, Experience } from "../models/associations.js";

export const adminPersonsController = {
  async getDetails(req, res) {
    const css = "detailsPerson";
    const idPerson = req.params.id;
    const person = await Person.findByPk(idPerson);
    console.log(person);

    const details = await Details.findOne({ where: { person_id: idPerson } });
    console.log(details);
    let history;
    if (details) {
      return history = await Experience.findAll({
        where: { details_id: details.id },
      });
    }
    let rewards;
    const imgName = person.lastname.replace(" ", "").toLocaleLowerCase();
    const img = `/img/persons/${imgName}.png`;
    console.log(img);
    

    res.render("adminPerson.ejs", { img, person, details, history, rewards, css });
  },
};
