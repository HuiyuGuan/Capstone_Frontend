import React from "react"
import { Link } from "react-router-dom"

export default function ProductCard(props){
    const item = props.item
    return(
        <div className="productcard">
            <img src={item.image} alt={item.name} width="350px"/>
            <Link to={`/${item.name}/profile`} state={{item:item}}><h4>{item.name}</h4></Link>
            <h4>price: ${(item.price).toFixed(2)}</h4>
        </div>
    )
}