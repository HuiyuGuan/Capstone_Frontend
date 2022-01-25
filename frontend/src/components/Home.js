import React from "react"
import ProductCard from "./ProductCard"

export default function Home(){
    return (
        <div className ="home">
            <div className="trending"><h3>Trending: </h3>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <div className="random">
                <h2>Random:  </h2>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}