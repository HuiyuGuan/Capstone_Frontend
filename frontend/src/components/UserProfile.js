import React from "react"
import { useNavigate } from "react-router-dom"

export default function UserProfile(props){
    const hasLogin = props.loginStatus
    const navigate = useNavigate()
    return(
        <>
            {hasLogin && <div className="UserProfile">
                <h3>name</h3>
                <h3>email</h3>
                <h3>phone</h3>
                <h3>country</h3>
            </div>}
            {!hasLogin && navigate("/")}
        </>
    )
}