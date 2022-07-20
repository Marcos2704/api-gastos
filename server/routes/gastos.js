
const express = require("express");

const gastosController = require("../controller/gastos");

const router = express.Router();


router.post("/", gastosController.createGastos);
router.get("/search/", gastosController.findGastoByArticle);
router.get("/search/", gastosController.findGastoByPrice);
router.get("/", gastosController.GastosfindAll)


module.exports = router;