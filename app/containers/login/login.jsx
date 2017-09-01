import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {post,get} from '../../fetch/fetch';
import {getCookie,setCookie} from "../../util/cookie";
import * as userinfoAction from './../../actions/userinfo'
import './login.sass';

class Login extends React.Component{
    constructor(props,context){
        super(props,context);
        this.context.router;
        this.state = {
            name:'',
            psw:'',
            error:''
        }
    }
    render() {
        return (
            <div className="loginWrapper">
                <div className="loginName">
                    <input type="text" placeholder='用户名' onChange={this.changeName.bind(this)} value={this.state.name}/>
                </div>
                <div className="loginName">
                    <input type="password" placeholder='密码' onChange={this.changePsw.bind(this)} value={this.state.psw}/>
                </div>
                <div className="errorInfo">{this.state.error}</div>
                <div className="loginBtn">
                    <input type="button" value='登录' onClick={this.login.bind(this)}/>
                </div>
            </div>
        )
    }
    changeName(e) {
        this.setState({
            name:e.target.value
        })
    }changePsw(e) {
        this.setState({
            psw:e.target.value
        })
    }
    login() {
        const username = this.state.name;
        const psw = this.state.psw;
        post('/api/login',{username,psw}).then(data => {
             setCookie('username',username,2);
             setCookie('isLogin','1',2);
            this.setState({
                error:''
            })
            this.props.userinfoAction.login({username,isLogin:'1'});
            this.context.router.push('/home');
        })
        .catch(e => {
            this.setState({
                error:'密码输入错误',
                name:'',
                psw:''
            })
        })
    }
}
// 使用context跳转路由
Login.contextTypes = {
    router:React.PropTypes.object
}
const mapStateToProps = (state) => {
    return {
        userinfo:state.userinfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        userinfoAction:bindActionCreators(userinfoAction,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)