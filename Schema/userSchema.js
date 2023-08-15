const mongoose = require('mongoose')
const usersSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    createOn:{
        type:Date,
        default:Date.now
    }

})

module.exports = usersSchema 