const Koa = require('koa');
const Route = require('koa-router');
const render = require('./lib/render');
const logger = require('koa-logger');
const koaBody = require('koa-body');
const app = new Koa();
const router = new Route();

const posts = [];

app.use(render);
app.use(logger());
app.use(koaBody());

async function list(ctx) {
  await ctx.render('list', { posts: posts });
};

async function add(ctx) {
  await ctx.render('new');
};

async function show(ctx) {
  const id = ctx.params.id;
  const post = posts[id];
  await ctx.render('show', {post: post});
};

async function create(ctx) {
  const post = ctx.request.body;
  console.log('post...', post);
  const id = posts.push(post) - 1;
  post.id = id;
  post.created_at = new Date();
  console.log('posts...', posts);
  ctx.redirect('/');
};

router.get('/', list)
   .get('/post/new', add)
   .get('/post/:id', show)
   .post('/post', create);

app.use(router.routes());
app.listen(3000);
