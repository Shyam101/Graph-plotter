import './App.css';
import NavBarComp from './components/NavBarComp';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from 'react-router-dom';
import BasePage from './pages/BasePage';


function App() {
    return (
        <BrowserRouter>
            <NavBarComp/>
            <BasePage/>
        </BrowserRouter>
    );
}

export default App;
