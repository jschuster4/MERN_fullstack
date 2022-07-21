const Product = require("../models/product.models")


module.exports.createOne = (req, res) => {
    Product.create(req.body)
    .then(addOne => res.json(addOne))
    .catch(err => res.json({message: "Error adding product", error: err}))
}

module.exports.findOne = (req, res) => {
    Product.findOne({_id: req.params._id})
    .then(findOne => res.json(findOne))
    .catch(err => res.json({message: "Error finding one product", error: err}))
}

module.exports.findAll = (req, res) => {
    Product.find()
    .then(findAll => res.json(findAll))
    .catch(err => res.json({message: "Error finding all product", error: err}))
}

module.exports.updateOne = (req, res) => {
    Product.findOneAndUpdate({_id: req.params._id}, req.body)
    .then(updateOne => res.json(updateOne))
    .catch(err => res.json({message: "Error updating one product", error: err}))
}

module.exports.delete = (req, res) => {
    Product.deleteOne({_id: req.params._id})
    .then(res.json({message: "item deleted"}))
    .catch(err => res.json({message: "Error updating one product", error: err}))
}