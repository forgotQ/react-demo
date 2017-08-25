import React from 'react';
import {post,get} from '../../fetch/fetch';
import './login.sass';
class Login extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state = {
            name:'',
            psw:''
        }
    }
    render() {
        return (
            <div className="loginWrapper">
                <div className="loginName">
                    <input type="text" placeholder='用户名' onChange={this.changeName.bind(this)}/>
                </div>
                <div className="loginName">
                    <input type="password" placeholder='密码' onChange={this.changePsw.bind(this)} />
                </div>
                <div className="loginBtn">
                    <input type="button" value='登录' onClick={this.login.bind(this)}/>
                </div>
                <div className="errorInfo"></div>
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
            console.log(data);
        })
    }
}
export default Login