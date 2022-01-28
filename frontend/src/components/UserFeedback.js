import React from "react"
import { useNavigate } from "react-router-dom"
import FeedbackCard from "./FeedbackCard"

export default function UserFeedback(props){
    const hasLogin = props.loginStatus
    const navigate = useNavigate()
    return(
        <>
            {hasLogin && <div className="feedback">
                <h1>Your Feedback</h1>
                <FeedbackCard />
            </div>}
            {!hasLogin && navigate("/")}
        </>
    )
}