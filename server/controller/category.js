
const category = require("../models/category");

const create = async (req, res, next) => {
  try {
    const name = req.body.name;
    const newCategory = await category.create(name);
    res.send(newCategory);
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.send(error.message);
  }
};

const findType = async (req, res, next) => {
    if (req.query.name === "") {
      res.statusCode = 400;
      res.send("name cannot be empty");
    }
    try {
      const category = await category.findByName(req.query.name);
      console.log("Response category", category);
      res.send(category);
    } catch (err) {
      console.log(err);
      res.statusCode = 500;
      res.send(err.message);
    }
  };

const findAll = async (req, res, next) => {
  try {
    const allCategory = await category.findAll();
    res.send(allCategory);
  } catch (error) {
    res.statusCode = 500;
    res.send(error);
  }
};

module.exports = { create, findType ,findAll};