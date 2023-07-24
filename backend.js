const backend = function() {
    this.counter = 0;
    this.todos = {};

    this.newTodo = function(todo) {
        const id = this.counter++;
        todo.id = id;
        this.todos[id] = todo;
        return todo;
    };

    this.getTodos = function() {
        return Object.values(this.todos);
    };

    this.getTodo = function(id) {
        return this.todos[id]
    };

    this.updateTodo = function(id, todo) {
        todo.id = id;
        this.todos[id] = todo;
        return this.todo[id];
    };

    this.deleteTodo = function(id) {
        delete this.todos[id];
        return true;
    };
};

module.exports = { backend };