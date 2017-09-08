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
                ]},
            ]
        }
    }
    render() {
        return (
            <div className="leftside-wrapper">{
                this.state.listData.map((item,index) => {
                    return (
                        <div className="menu" key={index}>
                            <div className="menuName"><span>{item.pName}</span></div>
                            <ul className="submenu">{item.name.map((subItem,subIndex) =>{
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
}
export default LeftSide
