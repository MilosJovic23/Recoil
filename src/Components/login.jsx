import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { UserState } from "../States/UserState";


const Login=()=>{

    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const setUserState=useSetRecoilState(UserState);


    const HandleLogin=()=>{
       if( email !== "admin@admin.com" || password !== "12345"){
           return;
       }
       setUserState({
           "LoggedIn":true,
           "email":email
       })
    }

    const HandleLogout=()=>{
    setUserState({})
    }

    const userData=useRecoilValue(UserState)
    console.log(userData.LoggedIn,userData.email)

    return(
        <>

            {!userData.LoggedIn? (
            <form>
                <input type="text" onInput={e => setEmail(e.currentTarget.value)}/>
                <input type="password" onInput={e => setPassword(e.currentTarget.value)}/>
                <button type="button" onClick={HandleLogin}>Login</button>
            </form>
            ):(
            <button type="button" onClick={HandleLogout}>Logout</button>
            )
            }


        </>
    )
}

export default Login;