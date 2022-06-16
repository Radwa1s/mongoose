const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const createMany = require("./data/createMany");
const mongoose = require("mongoose");
const createOne = require("./data/createPerson");
const findName = require("./data/findName");
const findById = require("./data/findById");
const addFev = require("./data/addFev");
const deletedOne = require("./data/remove");
const rmMany = require("./data/removeMany");
const updateUser = require("./data/update");
const searshFev = require("./data/find.sort.limit");
mongoose.connect(process.env.DBU).catch((err) => console.log(err));
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/createmany", createMany);
app.post("/newperson", createOne);
app.post("/findname", findName);
app.post("/", findById);
app.post("/push", addFev);
app.delete("/delete", deletedOne);
app.delete("/rm", rmMany);
app.post("/update", updateUser);
app.get("/search", searshFev);

app.listen(8000, console.log("running on 8000"));
