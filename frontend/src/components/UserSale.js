import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserSale(props){
    const hasLogin = props.loginStatus
    const navigate = useNavigate()
    return(
        <>
            {hasLogin && <div className="sale">
                <h1>This is the sale page</h1>
            </div>}
            {!hasLogin && navigate("/")}
        </>
    )
}