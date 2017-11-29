var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
        email: {
            type: String,
            required: [true,  "Usuário deve ter e-mail !"]
        },
        date: {
            type: String,
            required: [true,  "Usuário deve ter data !"]
        },
        password: {
            type: String,
            required: [true,  "Usuário deve ter senha !"]
        },
        name: {
            type: String,
            required: [true,  "Usuário deve ter nome !"]
        }
    });

module.exports = mongoose.model("User", userSchema);