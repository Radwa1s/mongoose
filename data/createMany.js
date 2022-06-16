const PERSON = require("../models/personPrototype");
const createMany = async (req, res) => {
  const { array } = req.body;
  console.log(array);
  try {
    const arr = await PERSON.create(array);
    res.status(200).send(array);
  } catch (error) {
    console.log(error);
  }
};

module.exports = createMany;
