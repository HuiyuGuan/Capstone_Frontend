import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup(props){
    const navigate = useNavigate()

    const [firstname, setFirstname] = useState("")
    const [Lastname, setLastname] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [nameError,setNameError] = useState("")
    const [usernameError, setUsernameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [countryError, setCountryError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")


    function validate(){
        let isValidate = true

        if(firstname==="" || Lastname===""){
            setNameError("Name CAN NOT be blank")
            isValidate = false
        }
        else
            setNameError("")

        if(username===""){
            setUsernameError("Username CAN NOT be blank")
            isValidate = false
        }
        else
            setUsername("")

        if(password ===""){
            setPasswordError("Password CAN NOT be blank")
            isValidate = false;
        }
        else    
            setPasswordError("")

        if(confirmPassword !== password){
            setConfirmPasswordError("Password and confirm password DOES NOT match")
            isValidate = false
        }
        else
            setConfirmPasswordError("")

        if(!email.includes("@")){
            setEmailError("Invalid email")
            isValidate = false
        }
        else    
            setEmailError("")

        if(country ===""){
            setCountryError("Country CAN NOT be blank")
            isValidate = false
        }
        else
            setCountryError("")

        return isValidate
    }

    function handlesubmit(event){
        event.preventDefault()
        if(validate()){
            navigate("/")
        }
    }

    return(
        <form className="signup-form" onSubmit={handlesubmit} >
            <h1>Sign-up</h1>
            <label>
                Firstname: <br></br>
                <input type="text" value ={firstname} onChane={ e => setFirstname(e.target.value)}/>
            </label><br></br>
            <label>
                Lastname: <br></br>
                <input type="text" value = {Lastname} onChange={ e => setLastname(e.target.value)}/>
            </label><br></br>
            <label> 
                Username: <br></br>
                <input type="text" value = {username} onChange={ e => setUsername(e.target.value)}/>
            </label><br></br>
            <label>
                Email: <br></br>
                <input type="text" value = {email} onChange={ e => setEmail(e.target.value)}/>
            </label><br></br>
            <label>
                Country: <br></br>
                <input type="text" value = {country} onChange={ e => setCountry(e.target.value)}/>
            </label><br></br>
            <label>
                Password: <br></br>
                <input type="password" value = {password} onChange={ e => setPassword(e.target.value)}/>
            </label><br></br>
            <label>
                Re-enter Password: <br></br>
                <input type="pasword" value = {confirmPassword} onChange={ e => setConfirmPassword(e.target.value)}/>
            </label><br></br><br></br>
            <input type = "submit" />
            <div className="form-error">
                <p>{nameError}</p>
                <p>{usernameError}</p>
                <p>{emailError}</p>
                <p>{countryError}</p>
                <p>{passwordError}</p>
                <p>{confirmPasswordError}</p>
            </div>
        </form>
    )
}