
import { useRecoilValue, useSetRecoilState } from "recoil";
import { UserState } from "../States/UserState";
import { useForm } from "react-hook-form";
import { EmailValidator } from "../Validators/EmailValidator";
import { PasswordValidator } from "../Validators/PasswordValidator";


const Login=()=>{

    const setUserState=useSetRecoilState(UserState);
    const {register,handleSubmit,formState:{errors}} =useForm()

    const onSubmit=(data)=>{
        console.log(data);
        setUserState({
            "LoggedIn":true,
            "email":data.email
        });
    }


    const HandleLogout=()=>{
    setUserState({})
    }

    const userData=useRecoilValue(UserState)
    console.log(userData.data)

    return(
        <>

            {!userData.LoggedIn? (
            <form onSubmit={handleSubmit(onSubmit)}>
                {errors.email && (<p>{errors.email.message}</p>) }
                <input type="text" {...register("email", EmailValidator )} />
                {errors.password && (<p>{errors.password.message}</p>) }
                <input type="password" {...register("password", PasswordValidator  )} />
                <button  >Login</button>
            </form>
            ):(
            <button onClick=
                {HandleLogout}>Logout</button>
            )
            }


        </>
    )
}

export default Login;