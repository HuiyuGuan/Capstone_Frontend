import React from "react"
import { useLocation } from "react-router-dom"

export default function ProductProfile(){
    const location = useLocation()
    const item = location.state.item
    return(
        <div className="productprofile">
            <img src={item.image} alt={item.name} width="800px"/>
            <h3>{item.name}</h3>
            <h4>Price: ${item.price.toFixed(2)}</h4>
            <h4>Stock: {item.stock}</h4>
            <h4>seller: {item.seller}</h4>
            <h3>{item.description}</h3>
        </div>
    )
}