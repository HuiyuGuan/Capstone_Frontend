import { useNavigate } from "react-router-dom";

export default function Signup(){
    const navigate = useNavigate()

    return(
        <form className="signup-form"
            onSubmit={e=>{
            e.preventDefault()
            navigate("/")
        }} >
        <h1>Sign-up</h1>
        <label>
            Firstname: <br></br>
            <input type="text" />
        </label><br></br>
        <label>
            Lastname: <br></br>
            <input type="text" />
        </label><br></br>
        <label> 
            Username: <br></br>
            <input type="text" />
        </label><br></br>
        <label>
            Email: <br></br>
            <input type="text" />
        </label><br></br>
        <label>
            Country: <br></br>
            <input type="text" />
        </label><br></br>
        <label>
            Password: <br></br>
            <input type="password" />
        </label><br></br>
        <label>
            Re-enter Password: <br></br>
            <input type="pasword" />
        </label><br></br><br></br>
        <input type = "submit" />
        </form>
    )
}