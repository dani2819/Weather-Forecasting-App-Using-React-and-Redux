import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import _ from 'lodash';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{
    renderList(cityData){
        const name = cityData.city.name;
        const temp = cityData.list.map((weather)=>{
            return weather.main.temp;
        });
        const pressure = cityData.list.map((weather)=>{
            return weather.main.pressure;
        });
        const humidity = cityData.list.map((weather)=>{
            return weather.main.humidity;
        });
        const {lon,lat} = cityData.city.coord;

        return (
            <tr key={name}>
                <td><GoogleMap lat={lat} lng={lon}/></td>
                <td><Chart data = {temp} color = "red" average = {_.sum(temp)/temp.length}/></td>
                <td><Chart data = {pressure} color = "blue" average = {_.sum(pressure)/pressure.length}/></td>
                <td><Chart data = {humidity} color = "green" average = {_.sum(humidity)/humidity.length}/></td>
            </tr>
        )
    }
    render(){
        return(
            <table className = "table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderList)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}){
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);