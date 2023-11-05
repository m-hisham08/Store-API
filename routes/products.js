const express = require('express');
const {getAllProductsStatic, getAllProducts} = require("../controllers/products");

const router = express.Router();

router.route('/').get(getAllProductsStatic).get(getAllProducts)

module.exports = router;