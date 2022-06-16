const PERSON = require("../models/personPrototype");
const findById = async (req, res) => {
  const { id } = req.query;

  try {
    const person = await PERSON.findById(id);
    person.favoriteFoods.push("spaghetti");
    person.save();
    res.status(200).send(person);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = findById;
