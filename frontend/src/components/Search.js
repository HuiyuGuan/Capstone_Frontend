import React from "react"
import { useLocation } from "react-router-dom"

export default function Search(props){
    const location = useLocation()
    return(
        <div className="search">
            <h1>This is the search bar page </h1>
            <h2>Currently searching {location.state.item}</h2>
        </div>
    )
}