import React from 'react';
import '../js/iconfont'
import '../style/select.sass'
class Zselect extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            open:false
        }
    }
    render(){
        return(
            <div className="Zselect-wrapper" tabIndex='0' onClick={this.selectChanged.bind(this)}>
                <span className="Zselect-selected">选择框选择</span>
                <svg className="Zselect-moreunfold" aria-hidden="true">
                    <use xlinkHref="#icon-moreunfold"></use>
                </svg>
                <ul className={"Zselect-selected-item  "+this.state.open?"":"Z-none"}>
                    <li className="Zselect-selected-item-li">第一个</li>
                    <li className="Zselect-selected-item-li">第一个</li>
                    <li className="Zselect-selected-item-li">第一个</li>
                </ul>
            </div>
        )
    }
    selectChanged(e) {

    }
}export default Zselect