const Author = require("../models/author.models");

module.exports.createOne = (req, res) => {
    Author.create(req.body)
    .then(addOne => res.json(addOne))
    .catch(err => res.json({message: "Error adding author", error: err}))
}

module.exports.findOne = (req, res) => {
    Author.findOne({_id: req.params._id})
    .then(findOne => res.json(findOne))
    .catch(err => res.json({message: "Error finding one author", error: err}))
}

module.exports.findAll = (req, res) => {
    Author.find()
    .then(findAll => res.json(findAll))
    .catch(err => res.json({message: "Error finding all Authors", error: err}))
}

module.exports.updateOne = (req, res) => {
    Author.findOneAndUpdate({_id: req.params._id}, req.body,{ runValidators: true } )
    .then(updateOne => res.json(updateOne))
    .catch(err => res.json({message: "Error updating one Author", error: err}))
}

module.exports.delete = (req, res) => {
    Author.deleteOne({_id: req.params._id})
    .then(res.json({message: "item deleted"}))
    .catch(err => res.json({message: "Error deleting one Author", error: err}))
}





