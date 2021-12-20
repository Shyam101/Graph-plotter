import {
    PieChart,
    Pie,
    Tooltip,
    Cell,
    ResponsiveContainer
} from 'recharts';

const hasNegativeValue = (data) => data.some(entry => entry.value < 0)

const PieChartPage = (props) => {

    const {data} = props;
    console.log(data)
    if(data.length >= 1) {
        console.log(hasNegativeValue(data))
        if(hasNegativeValue(data)) {
            return (<div class="containerr">
                <h2>PieCharts does not Support Negative Values</h2>
            </div>);
        } else {
            return(
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie dataKey="value"
                            isAnimationActive={true}
                            data={data}
                            cx="50%"
                            cy="50%"
                            // outerRadius={200}
                            fill="#8884d8"
                            label
                        >
                        <Tooltip/>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={data[index].color} />
                        ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            )
        }
    } else {
        return(
        <div class="containerr">
            <h2>Please add atleast 1 entry to begin</h2>
        </div>);
    }
}

export default PieChartPage;


