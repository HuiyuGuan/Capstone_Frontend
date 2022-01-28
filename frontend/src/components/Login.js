import { useNavigate } from "react-router-dom"
import { useState } from "react";

export default function Login(props){
    let navigate = useNavigate();
    let user = props.user

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [usernameError,setUsernameError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    function validate(){
        let isValidate = true
        if(username !== user[4].username){
            setUsernameError("Incorrect username")
            isValidate = false
        }
        else    
            setUsernameError("")

        if(password !== user[4].password){
            setPasswordError("Incorrect password")
            isValidate = false
        }
        else   
            setPasswordError("")

        return isValidate
    }

    function handlesubmit(event){
        event.preventDefault()
        if(validate()){
            props.setlogin(true)
            navigate("/")
        }
    }

    return (
        <div>
            <form className="login" onSubmit={handlesubmit}>
                <h1>Sign-in</h1>
                <label> 
                    Username: <br></br>
                    <input type="text" value={username} onChange={ e => setUsername(e.target.value)}/>
                </label><br></br>
                <label>
                    Password: <br></br>
                    <input type="password" value={password} onChange={ e => setPassword(e.target.value)}/>
                </label><br></br><br></br>
                <input type = "submit" value="submit"/>
            </form>
            <button onClick={()=>navigate("/signup")}>sign up</button>
            <div className="validation">
                <p>{usernameError}</p>
                <p>{passwordError}</p>
            </div>
        </div>
    )
}