# 基于koa+mysql实现简易blog

## 要实现的功能页面

* 首页-博客列表展示页(新增博客入口 + 博客列表)
* 博客新增内容页(博客题目 + 博客内容)
* 博客详情页(展示博客提示 + 博客内容)

## 要使用到的技术

* koa-views: 使用swip模板渲染引擎渲染所有.html页面
* koa-router: koa路由
* koa-body: 解析请求体的数据

## TODO

### 6.23 update
* [x] 删除某博客
* [x] 加入身份验证，xlj/xlj
* [x] 显示博客创建时间+浏览数
* [] 创建博客支持富文本
* [] 博客数据存在mysql
* [] 创建留言、删除留言

## 参考

[N-blog 使用 Express + MongoDB 搭建多人博客](https://github.com/nswbmw/N-blog)

