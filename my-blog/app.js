const Koa = require('koa');
const Route = require('koa-router');
const render = require('./lib/render');
const logger = require('koa-logger');
const koaBody = require('koa-body');
const auth = require('koa-basic-auth');
const app = new Koa();
const router = new Route();

let posts = [];

app.use(async function(ctx, next) {
  try {
    await next();
  } catch (err) {
    if (err.status === 401) {
      ctx.status = 401;
      ctx.set('WWW-Authenticate', 'Basic');
      ctx.body = 'cannot haz that';
    } else {
      throw err;
    }
  }
});
app.use(auth({ name: 'xlj', pass: 'xlj' }));

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
  posts[id].views++;
  console.log('post...', posts);
  await ctx.render('show', {post: post});
};

async function create(ctx) {
  const post = ctx.request.body;
  const id = posts.push(post) - 1;
  post.id = id;
  post.created_at = new Date();
  post.views = 0; // 浏览数
  ctx.redirect('/');
};

async function deleteBlog(ctx) {
  const id = ctx.params.id;
  posts.splice(id, 1);
  ctx.redirect('/');
}

router.get('/', list)
   .get('/post/new', add)
   .get('/post/:id', show)
   .post('/post', create)
   .get('/delete/:id', deleteBlog);

app.use(router.routes());
app.listen(3000);
