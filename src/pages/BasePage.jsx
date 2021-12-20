import {Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import PieChartPage from '../components/PieChartPage';
import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';
import NotFoundPage from './NotFoundPage';
import {useState} from 'react';
import InputCard from '../components/InputCard'
import Button from 'react-bootstrap/Button'
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const filterEmptyData = (data) => data.filter(entry => entry.name !== undefined && entry.value !== undefined)

const BasePage = () => {

    const [data, setData] = useState([])

    const handleChange = (propName, val, index) => {
        setData((oldState) => ([
            ...oldState.slice(0, index), {
                ...oldState[index],
                [propName]: val
            },
            ...oldState.slice(index + 1)
        ]))
    }

    const handleClose = index => {
        setData((oldState) => ([
            ...oldState.slice(0, index),
            ...oldState.slice(index + 1)
        ]))
    }

    const onFileChange = (e) => {
        let file = e.target.files[0]
        let fileReader = new FileReader();
        let fileData = [];
        let alls;
        fileReader.onload = (event: any) => {
            alls = fileReader.result.split('\n');
            alls.forEach(item => {
                let c = item.split(',');
                fileData = [...fileData, 
                {
                    name: c[0],
                    value: +c[1],
                    color: COLORS[fileData.length % COLORS.length]
                }]
            })

            setData(oldState => ([...fileData]));
        }
        
        fileReader.readAsText(file);
        console.log(fileData);
    }

    return (<div className="split-container">
        <div className="split-box"
            style={
                {
                    width: "30%",
                    overflowX: "hidden"
                }
        }> {
            data.map((item, index) => (<div key={index}>
                <InputCard item={item} index={index} handleChange={handleChange} handleClose={handleClose} />
            </div>))
        }
        <div id="btn-box">
            <Button variant="primary" onClick={
                    () => setData((oldState) => {
                        return([
                            ...oldState, {color: COLORS[oldState.length % COLORS.length]}
                        ])
                    })
                }>New Entry</Button>
            
            <div style={{marginLeft: "20px"}}>
                <label for="file-upload" class="custom-file-upload">
                    <i class="fa fa-cloud-upload"></i> Upload CSV
                </label>
                <input id="file-upload" onChange={onFileChange} type="file"/>
            </div>
        </div>

        </div>
        <div className="split-box"
            style={
                {width: "70%"}
        }>
            <Routes>
                <Route path="/"
                    element={<HomePage/>}></Route>
                <Route path="/pie-chart"
                    element={<PieChartPage data={filterEmptyData(data)}/>}></Route>
                <Route path="/bar-chart"
                    element={<BarChart data={filterEmptyData(data)}/>}></Route>
                <Route path="/line-chart"
                    element={<LineChart data={filterEmptyData(data)}/>}></Route>
                <Route path="*"
                    element={<NotFoundPage/>}></Route>
            </Routes>
        </div>

    </div>)
}

export default BasePage
