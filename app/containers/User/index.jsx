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

                </Zselect>
            </div>
        )
    }
}

// export default User
module.exports = User;