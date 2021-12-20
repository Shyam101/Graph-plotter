import React, {PureComponent} from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Cell,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

export default class BarChartComp extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

    render() {
        const {data} = this.props;
        console.log(data)
        if(data.length >= 1) {
            return (
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={500}
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
                    <Bar dataKey="value" fill="#8884d8" isAnimationActive={true}> {this.props.data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={data[index].color} />
                ))}</Bar>
                </BarChart>
            </ResponsiveContainer>);
        }
        else {
            return(
            <div class="containerr">
                <h2>Please add atleast 1 entry to begin</h2>
            </div>);
        }
    }
}
