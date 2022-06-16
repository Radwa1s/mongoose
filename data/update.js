const PERSON = require("../models/personPrototype");

const findAndUpdate = async (req, res) => {
  const { name, age } = req.body;

  try {
    const updateAge = await PERSON.findOneAndUpdate(
      { name: name },
      { $set: { age } },
      { new: true }
    );

    if (updateAge) {
      res.status(200).send(updateAge);
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = findAndUpdate;
