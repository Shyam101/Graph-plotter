import React, {PureComponent} from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';


export default class Example extends PureComponent {
    
    render() {
        const {data} = this.props;
        if(data.length >= 1) {
            return (
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={500}
                        height={300}
                        data={this.props.data}
                        margin={
                            {
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }
                    }>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Line type="monotone" dataKey="value" isAnimationActive={true} stroke="#82ca9d"/>
                    </LineChart>
                </ResponsiveContainer>
            );
        } else {
            return(
            <div class="containerr">
                <h2>Please add atleast 1 entry to begin</h2>
            </div>);
        }
    }
}
