import { Link } from "react-router-dom"
import home from "../images/home.gif"

const HomePage = () => {
    return (
        <div id="homepage">
            <h1>Graph Plotter</h1>
            <p>Charts are a great tool for communicating information visually. 
                Main aim of this project is to enable quick plotting of data and switch between different types of charts 
                with same data. Graph plotter provides user with easy-to-use and intutive web design.
            </p>
            <h2>Get Started</h2>
            <p><strong>Note:</strong> CSV file should only contain two columns, one for key and one for value with no header</p>
            <div className="card-flex">
                <div style={{backgroundColor: "#0088FE"}} className="homepage-card">
                    <Link to="/bar-chart">Bar Chart</Link>
                </div>
                <div style={{backgroundColor: "#00C49F"}} className="homepage-card">
                    <Link to="/pie-chart">Pie Chart</Link>
                </div>
                <div style={{backgroundColor: "#FFBB28"}}className="homepage-card">
                    <Link to="/line-chart">Line Chart</Link>
                </div>
            </div>
            <h2>How to Use it</h2>
            <img style={{width: "90%", height: "90%"}} src={home} alt="GIF showing workings"/>
            <h2>About Us</h2>
            <p>
                We are Group 2. This project is a part of course software project management. Through this project we have gained 
                hands on experince of different software development methodologies,estimation techniques, risk analysis along
                with implementation
            </p>

        </div>
    )
}

export default HomePage
