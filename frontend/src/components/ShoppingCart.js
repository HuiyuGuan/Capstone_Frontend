import React from "react"
import { useNavigate } from "react-router-dom"
import ShoppingItem from "./ShoppingItem"

export default function ShoppingCart(props){
    const hasLogin = props.loginStatus
    const navigate = useNavigate()
    return(
        <>
            {hasLogin && <div className="shoppingcart">
                <h1>Shopping Cart </h1>
                <ShoppingItem />
            </div>}
            {!hasLogin && navigate("/")}
        </>
    )
}