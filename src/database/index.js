// Conexão com o Banco de Dados


const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/noderest', {
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true
});

mongoose.set('useFindAndModify', false);


mongoose.Promise = global.Promise;

module.exports = mongoose