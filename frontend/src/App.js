import './App.css';
import React from "react"
import { HashRouter,Route, Routes} from "react-router-dom"
import Layout from "./components/Layout"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Home from "./components/Home"




function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path = "/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path = "/login" element={<Login />}/>
            <Route path = "/signup" element={<Signup />} />
          </Route>
        </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
