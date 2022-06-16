const PERSON = require("../models/personPrototype");
const removeMany = async (req, res) => {
  const { name } = req.body;
  try {
    const deleteUser = await PERSON.remove({ name: name });
    if (deleteUser) {
      res.json({ massage: "deleted user" });
    }
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = removeMany;
