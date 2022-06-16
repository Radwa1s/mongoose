const PERSON = require("../models/personPrototype");

const findPersonByName = async (req, res) => {
  const username = req.query.name;
  console.log(username);
  try {
    const person = await PERSON.findOne(username);
    res.status(200).send(person);
    console.log(person);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = findPersonByName;
