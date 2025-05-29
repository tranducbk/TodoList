const Koa = require('koa');
const koaBody = require('koa-body').default;
const routes = require('./routes/routes');
const cors = require('@koa/cors');

const app = new Koa();
const PORT = 5000;

const corsOptions = {
    origin: 'http://localhost:3000',
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

app.use(cors(corsOptions));
app.use(koaBody());
app.use(routes.routes());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});