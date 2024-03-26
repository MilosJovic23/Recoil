import {useState} from "react";
import {useSetRecoilState} from "recoil";
import {UserState} from "../States/UserState";


const Login=()=>{

    const [email,setEmail]=useState("admin@admin.com");
    const [password,setPassword]=useState("12345");
    const setUserState=useSetRecoilState(UserState);


    const HandleLogin=()=>{
       if( email !== "admin@admin.com" || password !== "12345"){
           return;
       }
       setUserState({"LoggedIn":true})
    }





    return(
        <>


            <form>
                <input type="text" onInput={e=>setEmail(e.currentTarget.value)}/>
                <input type="password" onInput={e=>setPassword(e.currentTarget.value)}/>
                <button type="button" onClick={HandleLogin}>Login</button>
            </form>
        </>
    )
}

export default Login;