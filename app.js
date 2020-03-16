const koa = require('koa');
const json = require('koa-json');
const koarouter = require('koa-router');
const path = require('path');
const render = require('koa-ejs');
const bodyparser = require('koa-bodyparser');


const app = new koa();
const router = new koarouter();


// Replace with DB
const things = ['Phone', 'android', 'iPhone', 'Ultimate']

// Json pretty Middleware, body parser
app.use(json());
app.use(bodyparser());

// Add additional properties to context
app.context.user = 'Rahul';

// Simple Middleware example
// app.use(async ctx => (ctx.body = { msg: 'Hello world'}));

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'layout',
  viewExt: 'html',
  cache: false,
  debug: false
})

// routes
router.get('/', index);
router.get('/add', showAdd);
router.post('/add', add);

// list of things funtion
async function index(ctx) {
  await ctx.render('index', {
    title: 'Stupdi things title',
    things: things
  });
}

async function showAdd(ctx) {
  await ctx.render('add');
}

// add thing
async function add(ctx) {
  const body = ctx.request.body;
  things.push(body.thing);
  ctx.redirect('/');
}

/* // can also use this type of routes
router.get('/', async ctx => {
  await ctx.render('index', {
    title: 'Things I love title',
    things: things
  });
})
*/

router.get('/test', ctx => (ctx.body = `Hello ${ctx.user}`));
router.get('/test/:name', ctx => (ctx.body = `Hello ${ctx.params.name}`));

// Router Middleware
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log('server seraret...'));
