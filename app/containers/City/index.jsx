import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {get} from '../../fetch/fetch';

import 'city.sass'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            province:[],
            city:[]
        }
    }
    render() {
        return (
            <div>
                <select onChange={this.checkProvince.bind(this)}>
                    <option value="province">请选择省份</option>
                    {this.state.province.map((item,index) => {
                        return(
                            <option value={item.code} key={index}>{item.name}</option>
                        )
                    })}
                </select>
                <select>
                    <option value="city">请选择城市</option>
                </select>
            </div>
        )
    }
    componentWillMount() {
        get('/api/city/0').then((data) => {
            this.setState={
                province:data.data
            }
        })
    }
    checkProvince(e) {
        const val = e.target.value;
        if (val === 'province') return;
        get(`/api/city/${val}`).then((data) => {
            this.setState={
                city:data.data
            }
        })
    }


}

export default City
