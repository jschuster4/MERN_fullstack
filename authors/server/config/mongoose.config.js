const mongoose = require('mongoose'); 

mongoose.connect("mongodb://localhost/authors", {
    useNewUrlParser : true, 
    useUnifiedTopology: true
})

.then(() => console.log("Mongoose db connected"))
.catch(err => console.log("I lost the mongoose, db disconnected", err))