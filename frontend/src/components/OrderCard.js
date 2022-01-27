import React from "react"
import OrderItems from "./OrderItems"

export default function OrderCard(){
    return(
        <div className="ordercard">
            <small>Order placed: Jan 27,2022    Total Price: $50.56</small>
            <OrderItems />
            <OrderItems />
        </div>
    )
}