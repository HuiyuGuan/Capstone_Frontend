import React from "react";
import { Link } from "react-router-dom"

export default function NavBar(){
    const [lookUp,setLookUp] = React.useState("")

    let hasLogin = true

    function SearchItem(event){
        console.log(lookUp)
        setLookUp(event.target.value)
    }    

    return(
        <nav className = "navbar">
            <Link to="/" className="HomePage"><h1 className="nav-title">Marketplace Simulation</h1></Link>
            <div className="nav-links">
                <input className="nav-search" type="text" placeholder="search item" value ={lookUp}onChange={SearchItem}></input>
                <Link to="/search" className="search-link" state={{item:lookUp}}>Search</Link>
                {hasLogin && <span className="user-links">
                <Link to ="/userprofile" className="userprofile-link">user</Link>
                <Link to ="/order" className="order-link">order</Link>
                <Link to ="/shoppingcart" className="shoppingcart-link">cart</Link>
                </span>}
                {!hasLogin && <Link to ="/login" className="login-link">login</Link> }
            </div>
        </nav>
    )
}