const fs = require('fs');
const path = require('path');
const todos = require('./todos.json').data;

function getAllTodos() {
    return todos;
}

function addNewTodo(data) {
    if (!data.title) {
        throw new Error('Title is required');
    }
    const newTodo = {
        id: todos.length + 1,
        ...data,
        completed: false
    }
    const updatedTodos = [...todos, newTodo];
    fs.writeFileSync(path.join(__dirname, 'todos.json'), JSON.stringify({
        data: updatedTodos
    }, null, 2));
    return newTodo;
}

function updateTodoById(id, data) {
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
    if (todoIndex === -1) {
        throw new Error('Todo not found');
    }
    todos[todoIndex] = {...todos[todoIndex], ...data};
    fs.writeFileSync(path.join(__dirname, 'todos.json'), JSON.stringify({
        data: todos
    }, null, 2));
    return todos[todoIndex];
}

function deleteTodoById(id) {
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
    if (todoIndex === -1) {
        throw new Error('Todo not found');
    }
    const deletedTodo = todos[todoIndex];
    todos.splice(todoIndex, 1);
    fs.writeFileSync(path.join(__dirname, 'todos.json'), JSON.stringify({
        data: todos
    }, null, 2));
    return deletedTodo;
}

module.exports = {
    getAllTodos,
    addNewTodo,
    updateTodoById,
    deleteTodoById
}


