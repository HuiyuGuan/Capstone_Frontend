import './App.css';
import React from "react"
import { useState } from 'react';
import { HashRouter,Route, Routes} from "react-router-dom"
import Layout from "./components/Layout"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Home from "./components/Home"
import UserProfile from "./components/UserProfile"
import Orders from "./components/Orders"
import ShoppingCart from "./components/ShoppingCart"
import ProductProfile from './components/ProductProfile';
import Search from "./components/Search"


function App() {
  const [hasLogin,setHasLogin] = useState(false)

  function setlogin(value){
    setHasLogin(value)
  }

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path = "/" element={<Layout loginStatus={hasLogin} setlogin={setlogin}/>} >
            <Route index element={<Home />} />
            <Route path = "/login" element={<Login loginStatus={hasLogin} setlogin={setlogin}/>}/>
            <Route path = "/signup" element={<Signup />} />
            <Route path = "/search" element={<Search />} />
            <Route path = "/userprofile"element={<UserProfile />} />
            <Route path = "/order"element={<Orders />} />
            <Route path = "/shoppingcart"element={<ShoppingCart />} />
            <Route path = "/productprofile" element={<ProductProfile />} />
          </Route>
        </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
