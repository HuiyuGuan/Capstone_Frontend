import React from "react"
import { useNavigate } from "react-router-dom"
import OrderCard from "./OrderCard"

export default function Orders(props){
    const user = props.user
    const navigate = useNavigate()
    return(
        <>
            {user.length !==0 && <div className="Order">
            <h1>Your Order</h1>
            <OrderCard />
            </div>}
            {user.length ===0 && navigate("/")}
        </>
    )
}