/*
 * @Author: za-xielingjuan
 * @Date: 2018-08-22 18:11:14
 * @Description: '渲染模板页面'
 * @Last Modified by: za-xielingjuan
 * @Last Modified time: 2018-08-22 18:43:53
 * @ToDo: ''
 */

const views = require('koa-views');
const path = require('path');

module.exports = views(path.join(__dirname, '/../views/'), {
  map: { html: 'swig' }
});
