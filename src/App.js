import About from "./components/About";
import Nav from "./components/Nav";
import Photos from "./components/Photos";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Nav/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/photos" element={<Photos/>}/>
                </Routes>
            </div>
        </Router>
    );
}

const Home = () => {
    return (
        <div>
            <h1>Homepage</h1>
        </div>
    );
}

export default App;
