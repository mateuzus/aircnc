const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:902519@cluster0.iawhe.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//req.query = Acessar query params (para filtros)
//req.params = Acessar rotas params (para editar params, delete)
//req.body = Acessar o corpo da requisição (para criação, edição)

app.use(express.json());
app.use(routes);


app.listen(3333);

