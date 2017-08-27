var app = require('koa')();
var router = require('koa-router')();
var mock = require('./mock/index');
var koaBody = require('koa-body')();
// router.get('/', function *(next) {
//     this.body = mock.cityList;
// });

// router.get('/api', function *(next) {
//     this.body = 'test data'
//
// });
// router.get('/api/1', function *(next) {
//     this.body = 'test data 1'
// });
// router.get('/api/2', function *(next) {
//     this.body = 'test data 2'
// });
router.post('/api/login',koaBody,function *(next) {
    var username = this.request.body.username;
    var psw = this.request.body.psw;
    if(username=='admin'&&psw == '123456'){
        this.body = mock.login;
    }else {
        this.body = mock.error;
    }
})
router.get('/api/city',function *(next) {
    this.body = mock.cityList;
})

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3000);
