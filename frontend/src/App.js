import './App.css';
import React from "react"
import { useState, useEffect} from 'react';
import { HashRouter,Route, Routes} from "react-router-dom"
import axios from "axios"
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
import AddProduct from './components/AddProduct';


function App() {
  const [user,setUser] = useState([])

  function setlogin(array){
  }

  async function fetchUser(){
    const users = await axios.get("https://ttpsellit.herokuapp.com/users")
    if(users)
      setUser(users.data)
  }

  useEffect(() => {
    fetchUser()
    console.log(user)
  }, [])

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path = "/" element={<Layout user={user} setlogin={setlogin}/>} >
            <Route index element={<Home />} />
            <Route path = "/login" element={<Login user={user} setlogin={setlogin}/>}/>
            <Route path = "/signup" element={<Signup />} />
            <Route path = "/search" element={<Search />} />
            <Route path = "/addproduct" element={<AddProduct />} />
            <Route path = "/user" element={<User username={user.username}/>} />
            <Route path = "/user/profile"element={<UserProfile username={user.username}/>} />
            <Route path = "/user/sale" element={<UserSale username={user.username}/>} />
            <Route path = "/user/feedback" element={<UserFeedback username={user.username} />} />
            <Route path = "/order"element={<Orders username={user.username}/>} />
            <Route path = "/shoppingcart"element={<ShoppingCart username={user.username}/>} />
            <Route path = "/productprofile" element={<ProductProfile />} />
          </Route>
        </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
