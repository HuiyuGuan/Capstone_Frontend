import './App.css';
import React from "react"
import { useState } from 'react';
import { HashRouter,Route, Routes} from "react-router-dom"
import Layout from "./components/Layout"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Home from "./components/Home"
import User from "./components/User"
import UserProfile from "./components/UserProfile"
import UserSale from "./components/UserSale"
import UserFeedback from "./components/UserFeedback"
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
            <Route path = "/user" element={<User loginStatus={hasLogin}/>} />
            <Route path = "/user/profile"element={<UserProfile loginStatus={hasLogin}/>} />
            <Route path = "/user/sale" element={<UserSale loginStatus={hasLogin}/>} />
            <Route path = "/user/feedback" element={<UserFeedback loginStatus={hasLogin} />} />
            <Route path = "/order"element={<Orders loginStatus={hasLogin}/>} />
            <Route path = "/shoppingcart"element={<ShoppingCart loginStatus={hasLogin}/>} />
            <Route path = "/productprofile" element={<ProductProfile />} />
          </Route>
        </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
