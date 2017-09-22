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
                <Zselect>
                    <Zoption value="1">第一个</Zoption>
                    <Zoption value="2">第2个</Zoption>
                    <Zoption value="3">第3个</Zoption>
                    <Zoption value="4">第4个</Zoption>
                </Zselect>
            </div>
        )
    }
}

// export default User
module.exports = User;