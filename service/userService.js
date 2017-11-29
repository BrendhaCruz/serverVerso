var User = require("../model/User");
var db_config = require('../model/config/db_config');

db_config();

var mongooseToObject = function(mongooseObject) {
    const objeto = mongooseObject.toObject();
    delete objeto.__v;
    return objeto;
};

var UserService = {

    saveUser : function (user) {
        var userMongoose = new User(user);

        return new Promise(function (resolve, reject) {
            userMongoose.save(function (err, result) {
                return (err) ? reject(err.message) : resolve(mongooseToObject(result))
            });
        });
    }
};

module.exports = UserService;