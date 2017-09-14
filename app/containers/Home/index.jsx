import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LeftSide from '../LeftSide'
import Header from '../Header'
import './home.sass'
class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
           <div className="container">
               <Header/>
               <div className="wrapper">
                   <LeftSide/>
                   <div className="content">
                       {this.props.children}
                   </div>
               </div>
           </div>
        )
    }
}

export default Home
