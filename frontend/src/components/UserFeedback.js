import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserFeedback(props){
    const hasLogin = props.loginStatus
    const navigate = useNavigate()
    return(
        <>
            {hasLogin && <div className="feedback">
                <h1>This is the feedback page</h1>
            </div>}
            {!hasLogin && navigate("/")}
        </>
    )
}