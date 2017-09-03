import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import '../static/css/sass/animate.sass'

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="app">
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="page"
                    transitionEnterTimeout={100}
                    transitionLeaveTimeout={100}>
                    {React.cloneElement(this.props.children, {
                        key: this.props.location.pathname
                    })}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default App
