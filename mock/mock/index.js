var Mock = require('mockjs');
var code = require('../url/code');
exports.login = Mock.mock({
    code:code.success_code,
    msg:"登陆成功",
    data:{
        'username':'@cname',
        'age|20-50': 24,
        'desc' : '@csentence()'
    }
})
exports.error = Mock.mock({
    code:code.success_error,
    msg:"密码错误",
});
exports.cityList = Mock.mock({
    code:code.success_code,
    msg:"成功",
    data:[
        {'code':'1000','name':'北京'},
        {'code':'1001','name':'天津'},
        {'code':'1002','name':'上海'},
        {'code':'1003','name':'广州'},
        {'code':'1004','name':'深圳'},
        {'code':'1005','name':'成都'},
        {'code':'1006','name':'杭州'},
    ]
});