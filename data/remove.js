const PERSON = require("../models/personPrototype");
const removePerson = async (req, res) => {
  const { id } = req.query;
  try {
    const finduser = await PERSON.findByIdAndRemove({ _id: id });
    if (finduser) {
      //   PERSON.remove();
      res.json({ massage: "deleted user" });
    }
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = removePerson;
