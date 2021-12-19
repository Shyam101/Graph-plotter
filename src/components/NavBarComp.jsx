import {Navbar, Container, Nav} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';


const NavBarComp = () => {

    return (
        <Navbar bg="primary" variant="dark"
            style={
                {height: "60px"}
        }>
            <Container style={
                {marginLeft: "5px"}
            }>
                <Link to="/">
                    <Navbar.Brand style={
                        {fontSize: "x-large"}
                    }>Graph Plotter</Navbar.Brand>
                </Link>
                <Nav className="me-auto"
                    style={
                        {fontSize: "large"}
                }>
                    <Nav.Link as={NavLink}
                        to="/bar-chart">Bar Chart</Nav.Link>
                    <Nav.Link as={NavLink}
                        to="/pie-chart">Pie Chart</Nav.Link>
                    <Nav.Link as={NavLink}
                        to="/line-chart">Line Chart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBarComp
