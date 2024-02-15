//crea el modelo de usuario
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    username: String,
    password: String
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;

