
const gastos = require("../models/gastos");


//crear gastos
const createGastos = async (req, res, next) => {
  const article = req.body.article;
  const price = req.body.price
  const category = req.body.category.length ? req.body.category : [];

 
  try {
    newGasto = await gastos.create(article, price,category);
    res.send(newGasto);
  } catch (err) {
    console.log(err);
    res.statusCode = 500;
    res.send(err.message);
  }
};
//buscar gasto por titulo
const findGastoByArticle = async (req, res, next) => {
  if (req.query.article === "") {
    res.statusCode = 400;
    res.send("Article cannot be empty");
  }
  try {
    const gasto = await gastos.findByArticle(req.query.article);
    console.log("Response gastos", gasto);
    res.send(gasto);
  } catch (err) {
    console.log(err);
    res.statusCode = 500;
    res.send(err.message);
  }
};

//buscar gasto por precio
const findGastoByPrice = async (req, res, next) => {
  //si esta vacio
  if (req.query.price === null) {
    res.statusCode = 400;
    res.send("price cannot be empty");
  }

  try {
    const gasto = await gastos.findByPrice(req.query.price);
    console.log("Response gastos", gasto);
    res.send(gasto);
  } catch (err) {
    console.log(err);
    res.statusCode = 500;
    res.send(err.message);
  }
};


//obtener todos los gastos
const GastosfindAll = async (req, res, next) => {
  try {
    const allGastos = await gastos.findAll();
    res.send(allGastos);
  } catch (error) {
    res.statusCode = 500;
    res.send(error);
  }
};

module.exports = {
  createGastos,
  findGastoByArticle,
  findGastoByPrice,
  GastosfindAll,
};