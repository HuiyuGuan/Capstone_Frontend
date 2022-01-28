import React from "react";
import { useNavigate } from "react-router-dom";
import SaleCard from "./SaleCard"

export default function UserSale(props){
    const hasLogin = props.loginStatus
    const navigate = useNavigate()
    return(
        <>
            {hasLogin && <div className="sale">
                <h1>Your Sale</h1>
                <SaleCard />
            </div>}
            {!hasLogin && navigate("/")}
        </>
    )
}