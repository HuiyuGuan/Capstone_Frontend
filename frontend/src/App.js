import './App.css';
import React from "react"
import {HashRouter, Route, Routes} from "react-router-dom"
import axios from "axios";
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"



function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/login" element={<Login />}/>
          <Route path = "/signup" element={<Signup />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
