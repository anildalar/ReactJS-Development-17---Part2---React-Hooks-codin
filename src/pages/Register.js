import React, { useState } from 'react'

let Register=()=>{
    //1. Hook Variable Area
    //Every Component can its own data
    // const [variable,setVariable] = useState(initialValue);
    let name="Anil";
    const [surname,setSurname] = useState('Dollor');

    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    //2. Function defination area
    let submitData=()=>{
        console.log('OKOKOKOKO');
        console.log(username);
        console.log(email);
        console.log(password);
        let payload = {
            "username":username,
            "email":email,
            "password":password
        }
        console.log(payload);

        fetch(`http://localhost:1337/api/auth/local/register`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then((res)=>{
            return res.json();
        }).then((data)=>{
            console.log(data);
            if(data.jwt){
                alert('Register Successfully');
            }
        }).catch((err)=>{

        });
    }

    //3. Return Statment
  return (
    <div>
        <form>
            
            <input type="text" name="username" value={username} onChange={(e)=>{ setUsername(e.target.value)  }} id="username" placeholder="Username" />
            <input type="email" name="email" value={email} onChange={(e)=>{ setEmail(e.target.value)  }} id="email" placeholder="Email" />
            <input type="password" name="password" value={password} onChange={(e)=>{ setPassword(e.target.value)  }} id="password" placeholder="Password" />
            <input type="button" value="Submit" name="submit" id="submit" onClick={submitData} />
        </form>
    </div>
  )
}

//3. Export Area

export default Register;
