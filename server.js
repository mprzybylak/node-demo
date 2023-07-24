var express = require('express');
var bodyParser = require('body-parser')
var { backend } = require('./backend.js');

var b = new backend();

var app = express();
app.use(bodyParser.json());

app.post('/todos', function(req, res){
    res.send(b.newTodo(req.body));
})

app.get('/todos', function(req, res){
   res.send(b.getTodos());
});

app.get('/todos/:id', function(req, res){
    res.send(b.getTodo(req.params.id));
});

app.put('/todos/:id', function(req, res){
    res.send(b.updateTodo(req.params.id, req.body));
});

app.delete('/todos/:id', function(req, res){
    res.send(b.deleteTodo(req.params.id));
});

app.listen(8080);