import {Routes, Route} from "react-router-dom";

import {Menu, Slider1, Slider2} from "./components";
import './App.css';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Menu/>}/>
                <Route path={'/arrows-slider'} element={<Slider1/>}/>
                <Route path={'/grabbing-slider'} element={<Slider2/>}/>
                <Route path={'/buttons-slider'} element={<Menu/>}/>
            </Routes>
        </div>
    );
}

export default App;
