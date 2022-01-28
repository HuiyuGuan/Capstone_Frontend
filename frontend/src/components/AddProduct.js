import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "./User";

export default function AddProduct(props){
    const [name,setName] = useState("")
    const [img,setImg] = useState("")
    const [stock, setStock] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const navigate = useNavigate()

    async function addItem(){
        await axios.post("https://ttpsellit.herokuapp.com/items", {
            name : name,
            price : price,
            stock : stock,
            image : img,
            seller : props.user.username,
            description : description
        })
    }

    async function handlesubmit(event){
        event.preventDefault()
        await addItem()
        navigate("/")
    }

    return(
        <form className="addproduct" onSubmit={handlesubmit}>
            <label>name <input type="text" value={name} onChange={ e => setName(e.target.value)}/></label><br></br><br></br>
            <label>image url <input type="text" value={img} onChange={ e => setImg(e.target.value)}/></label><br></br><br></br>
            <label>stock <input type="text" value={stock} onChange={ e => setStock(e.target.value)}/></label><br></br><br></br>
            <label>price <input type="number" value={price} onChange={ e => setPrice(e.target.value)}/></label><br></br><br></br>
            <label>description <input type="text" value={description} onChange={ e => setDescription(e.target.value)}/></label><br></br>
            <input type="submit" />
        </form>
    )
}