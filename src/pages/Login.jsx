import {useState} from "react";
import api from "../services/api";


function Login(){

const [username,setUsername]=useState("");

const [password,setPassword]=useState("");


function login(){

    api.post("/token/",{

    username,
    password

    })
    .then(res=>{

    localStorage.setItem(
    "access",
    res.data.access
    );

    window.location="/";
    });

}


return (

    <div>

    <h2>Login</h2>


        <input
            placeholder="username"
            onChange={
            e=>setUsername(e.target.value)
            }
        />


        <input
            type="password"
            placeholder="password"
            onChange={
            e=>setPassword(e.target.value)
            }
        />

        <button onClick={login}>
            Login
        </button>

    </div>

        )
}

export default Login;