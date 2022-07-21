const ProductController = require('../controllers/product.controllers')

module.exports = app => {
    app.post("/api/product/create", ProductController.createOne);

    app.get("/api/product/:_id", ProductController.findOne); 

    app.get("/api/product", ProductController.findAll); 

    app.put("/api/product/update/:_id", ProductController.updateOne); 

    app.delete("/api/product/delete/:_id", ProductController.delete)
}