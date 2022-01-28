import React from "react"
import { useNavigate } from "react-router-dom"

export default function UserProfile(props){
    const user = props.user
    const navigate = useNavigate()
    return(
        <>
            {user.length !==0 && <div className="UserProfile">
                <h3>username: {user.name}</h3>
                <h3>email: {user.email}</h3>
                <h3>phone: {user.phone}</h3>
                <h3>country: {user.country}</h3>
            </div>}
            {user.length ===0 && navigate("/")}
        </>
    )
}
