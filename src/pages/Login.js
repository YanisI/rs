import React, { useState } from 'react'
import axios from 'axios';

const Login = () => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleSign= () => {
        const reqBody = {
            username : user,
            password : password
        };

        axios("localhost:8080/api/login", {
            headers: {
                "Content-type" : "application/json"
            },
            method : "post",
            body : JSON.stringify(reqBody)
        })
        .then(res => console.log(res))

    }

  return (
    <form>
        <input type="text" placeholder="Username" value={user} onChange={(e) => setUser(e.target.value)}/>
        <input type="password" placeholder="Password"value={password} onChange={(e) => setPassword(e.target.value)}/>
        <input type="password" placeholder="Password"value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button
            onClick={handleSign}>
          Sign in
        </button>
      </form>
  )
}

export default Login