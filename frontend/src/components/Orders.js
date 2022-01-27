import React from "react"
import { useNavigate } from "react-router-dom"
import OrderCard from "./OrderCard"

export default function Orders(props){
    const hasLogin = props.loginStatus
    const navigate = useNavigate()
    return(
        <>
            {hasLogin && <div className="Order">
            <h1>Your Order</h1>
            <OrderCard />
            </div>}
            {!hasLogin && navigate("/")}
        </>
    )
}