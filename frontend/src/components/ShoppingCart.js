import React from "react"
import { useNavigate } from "react-router-dom"
import ShoppingItem from "./ShoppingItem"

export default function ShoppingCart(props){
    const user = props.user
    const navigate = useNavigate()
    return(
        <>
            {user.length !==0 && <div className="shoppingcart">
                <h1>Shopping Cart </h1>
                <ShoppingItem />
            </div>}
            {user.length ===0 && navigate("/")}
        </>
    )
}