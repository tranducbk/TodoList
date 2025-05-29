const Router = require('koa-router');
const todosHandler = require('../handler/todoHandler')

const router = new Router();

const apiRouter = new Router({
    prefix: '/api'
});

apiRouter.get('/todos', todosHandler.getTodos);
apiRouter.post('/todos', todosHandler.addTodo);
apiRouter.put('/todos/:id', todosHandler.updateTodo);
apiRouter.delete('/todos/:id', todosHandler.deleteTodo);

router.use(apiRouter.routes());
router.use(apiRouter.allowedMethods());

module.exports = router;

