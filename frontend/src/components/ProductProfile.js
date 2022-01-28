import axios from "axios"
import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export default function ProductProfile(props) {
    const location = useLocation()
    const navigate = useNavigate()
    const user = props.user
    const item = location.state.item
    const [qty, setQty] = useState(1)
    const [qtyError, setQtyError] = useState("")

    function validate() {
        let isValidate = true
        if (user.length === 0) {
            isValidate = false
            navigate("/login")
        }
        if (qty < 1 || qty > item.stock) {
            setQtyError("Qty must be between 1 and " + item.stock)
            isValidate = false
        }
        else
            setQtyError("")

        return isValidate
    }

    async function buy() {
        await axios.post("https://ttpsellit.herokuapp.com/orders", {
            username: user.username,
            item_id: item.item_id,
            order_date: "2022-01-28",
            total: item.price
        })
        await axios.put("https://ttpsellit.herokuapp.com/items/", {
            item_id: item.item_id,
            name: item.name,
            price: item.price,
            stock: item.stock - qty,
            image: item.img,
            seller: item.username,
            description: item.description
        })
    }

    return (
        <div className="productprofile">
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} width="500px" />
            <h4>Price: ${item.price.toFixed(2)}</h4>
            <h4>Stock: {item.stock}</h4>
            <h4>seller: {item.seller}</h4>
            <h3>description: {item.description}</h3>
            {user.username !== item.seller &&
                <><button onClick={() => {
                    <label>Qty:<input type="number" value={qty} width="2" onChange={e => setQty(e.target.value)} /></label>
                    if (validate()) {
                        buy()
                        navigate("/order")
                    }
                }}>Buy</button>
                    <button>Add to Cart</button>
                    <p>{qtyError}</p>
                </>}
        </div>
    )
}