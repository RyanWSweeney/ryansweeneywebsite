import './App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/pages/Home";
import CustomComputers from "./components/pages/CustomComputers";
import Projects from "./components/pages/Projects";

function App() {
  return (
        <Router>
            <NavBar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>}/>
                <Route exact path="/custom-computers" element={<CustomComputers/>}/>
                <Route exact path="/projects" element={<Projects/>}/>
            </Routes>
            <Footer/>
        </Router>

  );
}

export default App;
