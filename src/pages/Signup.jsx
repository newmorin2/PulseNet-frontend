import {useState} from "react";
import api from "../services/api";


function Signup(){

const [data,setData]=useState({});


function signup(){

    api.post("/signup/",data)

    .then(()=>{
        alert("Account created")
    })

    }


return (

    <div>

        <h2>Signup</h2>

        <input
            placeholder="username"
            onChange={
            e=>setData({...data,username:e.target.value})
            }
        />

        <input
            placeholder="email"
            onChange={
            e=>setData({...data,email:e.target.value})
            }
        />

        <input
            type="password"
            placeholder="password"
            onChange={
            e=>setData({...data,password:e.target.value})
            }
        />

        <button onClick={signup}>
            Create Account
        </button>

    </div>

    )
}


export default Signup;