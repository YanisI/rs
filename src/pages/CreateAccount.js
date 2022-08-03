import axios from 'axios';
import React, { useState } from 'react'

const CreateAccount = () => {


    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDOB] = useState("");

    const onSubmitHandler = () => {
        axios({
            method: 'post',
            url: "https://cors-anywhere.herokuapp.com/http://localhost:8080/api/v1/person",
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "username": username,
                "firstname": firstname,
                "lastname": lastName,
                "password": password,
                "email": email,
                "dob": "1998-02-09"
            }
        })
        .then(res => console.log(res))
        
        ;
    }


    return (
        <div className="createAccount">
            <div className="container">

                <form
                    className='form'
                    onSubmit={onSubmitHandler}
                >
                    <p className='title'>
                        Welcome
                    </p>
                    <div className="t">
                        <input
                            type="text"
                            placeholder="Enter your Username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <label className='label' htmlFor="username">
                            Username
                        </label>
                    </div>


                    <div className="t">
                        <input
                            type="text"
                            placeholder="Firstname"
                            name="Enter your firstname"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            required
                        />
                        <label className='label' htmlFor="firstname">
                            Firstname
                        </label>
                    </div>
                    <div className="t">
                        <input
                            type="text"
                            placeholder="Enter your LastName"
                            name="lastname"
                            value={lastName}
                            onChange={(e) => setLastname(e.target.value)}
                            required
                        />
                        <label className='label' htmlFor="lastname">
                            Lastname
                        </label>
                    </div>

                    <div className="t">
                        <input
                            type="email"
                            placeholder="Enter your Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label className='label' htmlFor="email">
                            Email
                        </label>
                    </div>
                    <div className="t">
                        <input
                            type="date"
                            placeholder="Date of Birth"
                            name="dob"
                            value={dob}
                            onChange={(e) => setDOB(e.target.value)}
                            required
                        />
                        <label className='label' htmlFor="dob">
                            Date of Birth
                        </label>
                    </div>

                    <div className="t">
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            minLength="6"
                            required
                        />
                        <label className='label' htmlFor="password">
                            Password
                        </label>
                    </div>

                    <div className="t last">
                        <input
                            type="submit"
                            value="Create"
                        />
                    </div>
                </form >
            </div >
        </div >

    )
}

export default CreateAccount