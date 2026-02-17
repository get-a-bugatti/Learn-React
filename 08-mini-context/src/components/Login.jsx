import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

export default function Login () {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        setUser({username, password});
    }

    return(

        <>
           <h2>Login</h2>
           <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
           <br></br>
           <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
           <br></br>
           <button type="submit" onClick={handleSubmit}>Submit</button>
        </>
    );
}