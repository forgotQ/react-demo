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
                <ul className={"Zselect-selected-item  "+(this.state.open?"":"Z-height0")} ref='ulDom'>
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
            },() => {
                const {selectValue,selectText} = this.state;
                this.props.onChange(selectValue,selectText);
            });
            this.addSelectClass(this.refs.ulDom,el);
        }
    }
    selectBlur() {
        this.setState({
            open:false
        })
    }
    addSelectClass(parent,el) {
        const selectedLi = parent.querySelectorAll('.Zselect-selected-item-li-selected')[0];
        if(selectedLi) selectedLi.setAttribute('class','Zselect-selected-item-li');
        const _className = el.getAttribute('class');
        el.setAttribute('class',_className+' Zselect-selected-item-li-selected')
    }
    componentDidMount(){
        let {defaultValue} = this.props;
        const el = this.refs.ulDom;
        const elList = [].slice.call(el.childNodes).filter(item => item.nodeName === 'LI');
        for(let i = 0;i<elList.length;i++){
            const item = elList[i];
            if(defaultValue&&(item.getAttribute('value') == defaultValue)){
                this.setState({
                    selectValue:defaultValue,
                    selectText: item.innerHTML
                })
                this.addSelectClass(el,item);
                return;
            }
        }
        this.setState({
            selectValue:elList[0].getAttribute('value'),
            selectText: elList[0].innerHTML
        });
        this.addSelectClass(el,elList[0]);
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
