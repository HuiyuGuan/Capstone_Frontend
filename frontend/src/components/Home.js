import React, { useState, useEffect } from "react"
import ProductCard from "./ProductCard"
import axios from "axios"

export default function Home(){
    const [random, setRandom] = useState([]);

    async function randomItems() {
        const items = await axios.get("https://ttpsellit.herokuapp.com/items");
        const arr = [];
        if (items) {
            for (let i = 0; i < items.length; i++) {
                arr.push(items)
            }
            setRandom(arr);
        }        
    }

    useEffect(() => {
        randomItems();

    },[])

    const randomList = random.map(item => <ProductCard key = {item.item_id} item = {item}/>)

    return (
        <div className ="home">
            <h2>Trending</h2>
            <div className="trending">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <h2>Random</h2>
            <div className="random">
                {randomList}
            </div>
        </div>

    )
}