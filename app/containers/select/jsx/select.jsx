import React from 'react';
import '../js/iconfont'
import '../style/select.sass'
class Zselect extends React.Component{
    constructor(props){
        super(props)
        this.setState = {
            open:false
        }
    }
    render(){
        return(
            <div className="Zselect-wrapper" tabIndex='0'>
                <span className="Zselect-selected">选择框选择</span>
                <svg className="Zselect-moreunfold" aria-hidden="true" onClick={this.selectChanged.bind(this)}>
                    <use xlinkHref="#icon-moreunfold"></use>
                </svg>
                <ul className="Zselect-selected-item">
                    <li className="Zselect-selected-item-li">第一个</li>
                    <li className="Zselect-selected-item-li">第一个</li>
                    <li className="Zselect-selected-item-li">第一个</li>
                </ul>
            </div>
        )
    }
    selectChanged() {

    }
}export default Zselect