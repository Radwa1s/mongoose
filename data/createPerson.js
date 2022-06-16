const PERSON = require("../models/personPrototype");

const createOne = async (req, res) => {
  const { newOne } = req.body;
  try {
    const person = await new PERSON(newOne);
    res.status(200).send(person);
    person.save();
  } catch (error) {
    console.log(error);
  }
};
module.exports = createOne;
