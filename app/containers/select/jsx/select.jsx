import React from 'react';
import '../js/iconfont'
import '../style/select.sass'
export class Zselect extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            open:false,
        }
    }
    render(){
        return(
            <div tabIndex='0'
                 className={"Zselect-wrapper "+(this.state.open?"Zselect-wrapper-open":"Zselect-wrapper-close")}
                 onClick={this.selectChanged.bind(this)}
                 onBlur={this.selectBlur.bind(this)}>
                <span className="Zselect-selected">选择框选择</span>
                <svg className="Zselect-moreunfold" aria-hidden="true">
                    <use xlinkHref="#icon-moreunfold"></use>
                </svg>
                <ul className={"Zselect-selected-item  "+(this.state.open?"":"Z-height0")}>
                    {this.props.children}
                </ul>
            </div>
        )
    }
    selectChanged(e) {
        this.setState(ov => ({
            open : !ov.open
        }));
    }
    selectBlur() {
        this.setState({
            open:false
        })
    }
}

export const Zoption = (props) => {
    return(
        <li className="Zselect-selected-item-li">第一个</li>
    )
}
Zselect.propTypes = {
    children:React.PropTypes.instanceOf(Zoption).isRequired
}
