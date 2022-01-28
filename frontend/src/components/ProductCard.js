import React from "react"
import { Link } from "react-router-dom"

export default function ProductCard(props){
    const item = props.item
    return(
        <div className="ProductCard">
            <h3>{item.image}</h3>
            <h4>{item.name}</h4>
            <h4>{item.price}</h4>
        </div>
    )
}