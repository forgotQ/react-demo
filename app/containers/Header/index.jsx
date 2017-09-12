import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import City from './../City'
import './header.sass';

class Header extends React.Component{
    constructor(props,context) {
        super(props,context)

    }
    render() {
        return(
            <div>
                <div className="header">
                   <div className="userinfo">
                        <span>用户名：</span>
                        <span>{this.props.userinfo.username}</span>
                   </div>
                    <City/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userinfo:state.userinfo
    }
}
export default connect(mapStateToProps)(Header)