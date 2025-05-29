const {
    getAllTodos,
    addNewTodo,
    updateTodoById,
    deleteTodoById
} = require('../database/TodoRepository');

async function getTodos(ctx) {
    try {
        const todos = getAllTodos();
        ctx.status = 200;
        ctx.body = {
            success: true,
            data: todos
        }
    }
    catch (e) {
        ctx.status = 500;
        ctx.body = {
            success: false,
            error: e.message
        }
    }
}

async function addTodo(ctx) {
    try {
        const { title } = ctx.request.body;
        if (!title) {
            ctx.status = 400;
            ctx.body = {
                success: false,
                error: 'Title is required'
            };
            return;
        }
        const newTodo = addNewTodo({ title });
        ctx.status = 201;
        ctx.body = {
            success: true,
            data: newTodo
        }
    }
    catch (e) {
        ctx.status = 400;
        ctx.body = {
            success: false,
            error: e.message
        }
    }
}

async function updateTodo(ctx) {
    try {
        const { id } = ctx.params;
        const { title, completed } = ctx.request.body;
        const updatedTodo = updateTodoById(id, { title, completed });
        ctx.status = 200;
        ctx.body = {
            success: true,
            data: updatedTodo
        }
    }
    catch (e) {
        ctx.status = e.message === 'Todo not found' ? 404 : 400;
        ctx.body = {
            success: false,
            error: e.message
        }
    }
}

async function deleteTodo(ctx) {
    try {
        const { id } = ctx.params;
        const deletedTodo = deleteTodoById(id);
        ctx.status = 200;
        ctx.body = {
            success: true,
            data: deletedTodo
        }
    }
    catch (e) {
        ctx.status = e.message === 'Todo not found' ? 404 : 400;
        ctx.body = {
            success: false,
            error: e.message
        }
    }
}

module.exports = {
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo
}
