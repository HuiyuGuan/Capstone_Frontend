import React from "react";
import { Link } from "react-router-dom";
//import searchButton from "../img/searchButton.js"

export default function NavBar(props){
    const [lookUp,setLookUp] = React.useState("")

    const hasLogin = props.loginStatus

    function SearchItem(event){
        console.log(lookUp)
        setLookUp(event.target.value)
    }    

    return(
        <nav className = "navbar">
            <Link to="/">
                <img src="https://media.istockphoto.com/vectors/shopping-cart-icon-design-cart-icon-symbol
                -design-vector-id1138644570?b=1&k=20&m=1138644570&s=170667a&w=0&h=uwXhyB-tFwJ64czfTBKAPNcPCxuAQ_pe823ApywiqcU=" 
                className="nav-logo" alt="logo"/>
            </Link>
            <Link to="/" className="HomePage"><h1 className="nav-title">TTP SMARKET</h1></Link>
            <div className="nav-links">
                <input className="nav-search" type="text" placeholder="search item" value ={lookUp}onChange={SearchItem}></input>
                <Link to="/search" className="search-link" state={{item:lookUp}}>
                    <img className="search-button" src="https://static.thenounproject.com/png/424965-200.png"></img>
                </Link>
                {hasLogin && <span className="user-links">
                <Link to ="/user" className="user-link">user</Link>
                <Link to ="/order" className="order-link">order</Link>
                <Link to ="/shoppingcart" className="shoppingcart-link">cart</Link>
                <button onClick={()=>props.setlogin(false)}>Log out</button>
                </span>}
                
                {!hasLogin && <Link to ="/login" className="login-link">login</Link> }
            </div>
        </nav>
    )
}