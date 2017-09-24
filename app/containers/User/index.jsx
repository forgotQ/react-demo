import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Zselect,Zoption} from '../select/jsx/select'
class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <h1>User</h1>
                <Zselect defaultValue="2" onChange={this.choose.bind(this)}>
                    <Zoption value="1">第一个</Zoption>
                    <Zoption value="2">第2个</Zoption>
                    <Zoption value="3">第3个</Zoption>
                    <Zoption value="3">第3个</Zoption>
                    <Zoption value="3">第3个</Zoption>
                </Zselect>
            </div>
        )
    }
    choose(value,text){
        console.log(value,text);
    }
}

// export default User
module.exports = User;