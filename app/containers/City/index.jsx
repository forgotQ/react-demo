import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {get} from '../../fetch/fetch';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as cityAction from './../../actions/city'
import './city.sass'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            province:[],
            city:[],
            selectIndex:'city'
        }
    }
    render() {
        return (
            <div className="city-wrapper">
                <select onChange={this.checkProvince.bind(this)}>
                    <option value="province">请选择省份</option>
                    {this.state.province.map((item,index) => {
                        return(
                            <option value={item.id} key={index}>{item.name}</option>
                        )
                    })}
                </select>
                <select onChange={this.checkCity.bind(this)} value={this.state.selectIndex}>
                    <option value="city">请选择城市</option>
                    {this.state.city.map((item,index) => {
                        return(
                            <option value={item.id} key={index}>{item.name}</option>
                        )
                    })}
                </select>
                <span>{this.props.selectCity.city}</span>
            </div>
        )
    }
    componentWillMount() {
        get('/api/city/0').then((data) => {
            this.setState({
                province:data.data
            })
        })
    }
    checkProvince(e) {
        const val = e.target.value;
        if (val === 'province') return;
        get(`/api/city/${val}`).then((data) => {
            const city = [].concat(data);
            this.setState({
                city,
                selectIndex:'city'
            })

        })
      this.props.cityAction.selectProvince({'province':val});
    }
    checkCity(e) {
        const val = e.target.value;
        this.setState({
           selectIndex:val
        });
        this.props.cityAction.selectCity({'city':val});
    }
}
const mapStateToProps = state => {
    return {
        selectProvince:state.selectProvince,
        selectCity:state.selectCity
    }
}
const mapDispatchToProps = dispatch => {
    return{
        cityAction:bindActionCreators(cityAction,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(City)
