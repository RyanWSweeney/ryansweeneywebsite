import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from "react";
import {Button} from "./components/Button";

function App() {
  return (
        <Router>
            <NavBar/>
            <h1>This page is under construction</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <Routes>
                <Route path="/" exact/>}/>
            </Routes>
        </Router>

  );
}

export default App;
