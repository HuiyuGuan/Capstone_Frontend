import React from "react";
import { useNavigate } from "react-router-dom";
import SaleCard from "./SaleCard"

export default function UserSale(props){
    const user = props.user
    const navigate = useNavigate()
    return(
        <>
            {user.length !==0 && <div className="sale">
                <h1>Your Sale</h1>
                <SaleCard />
            </div>}
            {user.length ===0 && navigate("/")}
        </>
    )
}