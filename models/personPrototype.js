const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const personSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    favoriteFoods: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const PERSON = mongoose.model("PERSON", personSchema);
module.exports = PERSON;
