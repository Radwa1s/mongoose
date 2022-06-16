const PERSON = require("../models/personPrototype");

const findById = async (req, res) => {
  const id = req.query.id;
  console.log(id);
  try {
    const personid = await PERSON.findById(id);
    res.status(200).send(personid);
    console.log(personid);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = findById;
