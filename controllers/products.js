const Product = require('../models/Products');

const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({name: "armchair"});
    res.status(200).json({nbHits: products.length, products});
}

const getAllProducts = async (req, res) => {
    try {
        const {name, price, rating, featured, company, sort, fields} = req.query;
        const queryObject = {};

        if(name){
            queryObject.name = name;
        }

        if(price){
            queryObject.price = price;
        }

        if(rating){
            queryObject.rating = rating;
        }

        if(featured){
            queryObject.featured = featured === 'true' ? true : false;
        }

        if(company){
            queryObject.company = company;
        }

        const results = Product.find(queryObject);

        if(sort){
            const sortList = sort.split(',').join(' ');
            results.sort(sortList);
        }

        if(fields){
            const fieldList = fields.split(',').join(' ');
            results.select(fieldList);
        }

        const page = req.query.page || 1;
        const limit = req.query.limit || 50;
        const skip = (page - 1) * limit;

        const products = await results.skip(skip).limit(limit);

        res.status(200).json({nbHits: products.length, products});
    } catch (error) {
        res.status(404).json({msg: "No such products!"});
    }
    
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}