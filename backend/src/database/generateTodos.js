const { faker } = require('@faker-js/faker');
const fs = require('fs');
const path = require('path');

const generateTodos = () => {
    const todos = [];
    for (let i = 0; i < 10; i++) {
        todos.push({
            id: i + 1,
            title: faker.lorem.sentence(),
            completed: false
        });
    }
    
    const filePath = path.join(__dirname, "todos.json");
    fs.writeFileSync(filePath, JSON.stringify({
        data: todos
    }, null, 2), "utf-8");
}

generateTodos();
