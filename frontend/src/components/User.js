import React from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export default function User(props){
    const hasLogin = props.loginStatus
    const navigate = useNavigate()
    return(
        <>
            {hasLogin && <div className="user">
                <Link to="/user/profile"><button>Profile</button></Link><br></br>
                <Link to="/user/sale"><button>Sale List</button></Link><br></br>
                <Link to="/user/feedback"><button>Feedback List</button></Link><br></br>
            </div>}
            {!hasLogin && navigate("/")}
        </>
    )
}