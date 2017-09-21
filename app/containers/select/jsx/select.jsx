import React from 'react';
import '../js/iconfont'
import '../style/select.sass'
export class Zselect extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            open:false
        }
    }
    render(){
        return(
            <div tabIndex='0'
                 className={"Zselect-wrapper "+(this.state.open?"Zselect-wrapper-open":"Zselect-wrapper-close")}
                 onClick={this.selectChanged.bind(this)}
                 onBlur={this.selectBlur.bind(this)}>
                <span className="Zselect-selected">
                    {this.state.selectText}
                </span>
                <svg className="Zselect-moreunfold" aria-hidden="true">
                    <use xlinkHref="#icon-moreunfold"></use>
                </svg>
                <ul className={"Zselect-selected-item  "+(this.state.open?"":"Z-height0")} ref={this.ulDom.bind(this)}>
                    {this.props.children}
                </ul>
            </div>
        )
    }
    selectChanged(e) {
        const el = e.target;
        this.setState(ov => ({
            open : !ov.open
        }));
        const isSelected = el.getAttribute('disabled');
        if(el.nodeName === 'LI' && !isSelected){
            this.setState({
                selectText: el.innerHTML,
                selectValue: el.getAttribute('value'),
                defaultValue: ''
            });
        }
        console.log(this.state);
    }
    selectBlur() {
        this.setState({
            open:false
        })
    }
    ulDom(el) {
        const elList = [].slice.call(el.childNodes);
        elList.forEach(item => {
            if(item.nodeName === 'LI'){

            }
        })
        let {defaultValue} = this.props
        if(defaultValue){
            this.setState({
                selectValue:defaultValue
            })
        }
        // this.setState({
        //     selectText: el.innerHTML,
        //     selectValue: el.getAttribute('value'),
        //     defaultValue: ''
        // });
    }
    componentWillMount(){

    }
}
export const Zoption = (props) => {
    const {value,disabled,children} = props;
    return(
        <li className={"Zselect-selected-item-li "+(disabled?"Zselect-selected-item-li-disabled":"")}
            value={value}
            disabled={disabled}>
            {children}
        </li>
    )
}
Zselect.propTypes = {
    onChange: React.PropTypes.func
}
// Zoption.propTypes = {
//     disabled: React.PropTypes.boolean
// }
