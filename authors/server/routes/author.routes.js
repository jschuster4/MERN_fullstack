const AuthorController = require("../controllers/author.controllers")

module.exports = app => {
    app.post("/api/author/create", AuthorController.createOne);

    app.get("/api/author/:_id", AuthorController.findOne); 

    app.get("/api/author", AuthorController.findAll); 

    app.put("/api/author/update/:_id", AuthorController.updateOne); 

    app.delete("/api/author/delete/:_id", AuthorController.delete)
}