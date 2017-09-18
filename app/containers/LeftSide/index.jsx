import React from 'react';
import {Link} from 'react-router';

import './leftside.sass'

class LeftSide extends React.Component{
    constructor(props,context) {
        super(props,context)
        this.state= {
            listData: [
                {pName:'个人中心',name:[]},
                {pName:'菜单',name:[
                    {title:'新闻',path:'/news'},
                    {title:'商机',path:'business'},
                    {title:'新闻',path:'/news'},
                    {title:'商机',path:'business'},
                    {title:'新闻',path:'/news'},
                    {title:'商机',path:'business'},
                    {title:'新闻',path:'/news'},
                    {title:'商机',path:'business'},
                    {title:'新闻',path:'/news'},
                    {title:'商机',path:'business'},
                    {title:'新闻',path:'/news'},
                    {title:'商机',path:'business'},
                    {title:'新闻',path:'/news'},
                    {title:'商机',path:'business'},
                    {title:'新闻',path:'/news'},
                    {title:'商机',path:'business'},
                    {title:'新闻',path:'/news'},
                    {title:'商机',path:'business'},
                    {title:'新闻',path:'/news'},
                    {title:'商机',path:'business'},
                    {title:'新闻',path:'/news'},
                    {title:'商机',path:'business'},
                    {title:'新闻',path:'/news'},
                    {title:'商机',path:'business'},
                    {title:'新闻',path:'/news'},
                    {title:'商机',path:'business'},
                    {title:'新闻',path:'/news'},
                    {title:'商机',path:'business'},
                    {title:'新闻',path:'/news'},
                    {title:'商机',path:'business'},
                    {title:'新闻',path:'/news'},
                    {title:'商机',path:'business'},
                    {title:'新闻',path:'/news'},
                    {title:'商机',path:'business'},
                    {title:'新闻',path:'/news'},
                    {title:'商机',path:'business'},
                    {title:'新闻',path:'/news'},
                    {title:'商机',path:'business'},
                    {title:'新闻',path:'/news'},
                    {title:'商机',path:'business'},
                    {title:'新闻',path:'/news'},
                    {title:'商机',path:'business'},
                    {title:'新闻',path:'/news'},
                    {title:'商机',path:'business'},
                    {title:'新闻',path:'/news'},
                    {title:'商机',path:'business'},
                ]},
            ],
            index:null
        }
    }
    render() {
        return (
            <div className="leftside-wrapper">{
                this.state.listData.map((item,index) => {
                    return (
                        <div className="menu" key={index}>
                            <div className="menuName" onClick={this.showList.bind(this,index)}>{item.pName}</div>
                            <ul className={'submenu '+(index===this.state.index?'full':'')} style={item.name.length!==0?({maxHeight:'500px',overflowY:'auto'}):{}}>{item.name.map((subItem,subIndex) =>{
                                return (
                                    <li key={subIndex}><Link to={subItem.path}>{subItem.title}</Link></li>
                                )
                            })}</ul>
                        </div>
                    )
                })
            }
            </div>
        )
    }
    showList(index) {
        if(this.state.index===index){
            this.setState({
                index:null
            })
            return;
        }
        this.setState({
            index
        })
    }
}
export default LeftSide
