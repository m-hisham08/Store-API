
const getAllProductsStatic = async (req, res) => {
    res.send("All products fetched")
}

const getAllProducts = async (req, res) => {
    res.send("All products");
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}