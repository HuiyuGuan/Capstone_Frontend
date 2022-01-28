import React from "react"

export default function ShoppingItem(){
    return(
        <div className="ShoppingItem">
            <h2>img url</h2>
            <h3>product name</h3>
            <small>In Stock</small><br></br>
            <label>Qty:<input type="number" placeholder="1"/></label><br></br>
            <button>delete</button>
            <h3>Price</h3>
        </div>
    )
}