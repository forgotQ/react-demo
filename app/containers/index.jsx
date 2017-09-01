import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render({children, location}) {
        return (
            <CSSTransitionGroup
                component="div"
                transitionName="page"
                transitionAppear={true}
                transitionAppearTimeout={1500}
                transitionEnterTimeout={1500}
                transitionLeaveTimeout={1500}>
                {React.cloneElement(children, {
                    key: location.pathname
                })}
            </CSSTransitionGroup>
        )
    }
}

export default App
