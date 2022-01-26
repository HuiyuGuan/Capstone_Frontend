import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from "./NavBar"
import Footer from "./Footer"
    
export default function Layout (props) {
    return (
        <div>
            <NavBar loginStatus={props.loginStatus} setlogin={props.setlogin}/>
            <Footer />
            <Outlet />  
        </div>
    );
}