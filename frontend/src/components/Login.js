import { useNavigate } from "react-router-dom"


export default function Login(){
    let navigate = useNavigate();

    return (
        <div>
            <form className="login" 
                onSubmit={e=>{
                    e.preventDefault()
                    navigate("/")
                }} >
                <h1>Sign-in</h1>
                <label> 
                    Username: <br></br>
                    <input type="text" />
                </label><br></br>
                <label>
                    Password: <br></br>
                    <input type="password" />
                </label><br></br><br></br>
                <input type = "submit" value="submit"/>
            </form>
            <button onClick={()=>navigate("/signup")}>sign up</button>
        </div>
    )
}