var mongoose = require('mongoose');

require('events').EventEmitter.prototype._maxListeners = 0;

var db = mongoose.connection;


module.exports = function() {
    var perfil = 'versodb';

    /**
     * Caso não haja uma variável de ambiente informando o endereço do banco de dados,
     * utilizar endereço local.
     */
    var db_string = process.env.MONGODB_ADDRESS || 'mongodb://127.0.0.1:27017/' + perfil;
    if (!db.readyState) {
        var conn = mongoose.connect(db_string);
    }

    db.once('error', console.error.bind(console, 'Something really strange happened...'));
    db.once('open', function() {
        db.opened = true;
        console.log('DB Ready to go! ' + db_string);
    });

    return db;

    var userSchema = new mongoose.Schema({
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
          },
    }, 
    { collection: 'usercollection' });

   
 
module.exports = { Mongoose: mongoose, UserSchema: userSchema }
};