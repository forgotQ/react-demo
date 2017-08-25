var app = require('koa')();
var router = require('koa-router')();
var mock = require('./mock/index');
router.get('/', function *(next) {
    this.body = mock.cityList;
});

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
router.post('/api/login',function *(next) {
    console.log(this);
    var username = this.request.username;
    var psw = this.resquest.password;
    if(username=='admin'&&psw == '123456'){
        this.response = mock.login;
    }
})
router.get('/api/city',function *(next) {
    this.body = mock.cityList;
})

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3000);
