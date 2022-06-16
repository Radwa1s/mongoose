const PERSON = require("../models/personPrototype");

const sortByFev = async (req, res) => {
  const { food } = req.body;
  const quary = { food: food };
  console.log(food);
  try {
    const findPerson = await PERSON.find({ favoriteFoods: food })
      .limit(2)
      .sort({ name: 1 })
      .select({ name: true })
      .exec();
    res.status(200).send(findPerson);
  } catch (error) {
    console.log(error);
  }
};

module.exports = sortByFev;
