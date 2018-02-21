import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesRefrenceLine } from 'react-sparklines';

export default class Chart extends Component{
    render(){
        return(
        <div>                    
            <Sparklines width = {180} height = {120} data = { this.props.data }>
                <SparklinesLine color = {this.props.color} />
                
            </Sparklines>
            <div>{this.props.average}</div>
        </div>
        );
    }
}