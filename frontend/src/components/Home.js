import React from "react"
import ProductCard from "./ProductCard"

export default function Home(){
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
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}