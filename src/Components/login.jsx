import { useRecoilValue, useSetRecoilState } from "recoil";
import { UserState } from "../States/UserState";
import { useForm } from "react-hook-form";
import { EmailValidator } from "../Validators/EmailValidator";
import { PasswordValidator } from "../Validators/PasswordValidator";
import 'bootstrap/dist/css/bootstrap.min.css';


const Login=()=>{

    const setUserState=useSetRecoilState(UserState);
    const { register,handleSubmit,formState:{errors} } =useForm()

    const onSubmit=(data)=>{

        setUserState({
            "LoggedIn":true,
            "email":data.email
        });
    }
    const HandleLogout=()=>{
    setUserState({})
    }

    const userData=useRecoilValue(UserState)

    return(
        <>
            <div className="d-flex justify-content-center ">
                { !userData.LoggedIn? (
                    <form className="w-25 gap-2 d-flex flex-column justify-content-center align-items-center " onSubmit={ handleSubmit(onSubmit) }>
                        { errors.email && ( <p>{ errors.email.message }</p>) }
                        <input className="form-control" type="text" placeholder="email" {...register("email", EmailValidator )} />
                        { errors.password && ( <p>{ errors.password.message }</p>) }
                        <input className="form-control" type="password" placeholder="password" {...register("password", PasswordValidator  )} />
                        <button className="btn btn-dark">Login</button>
                    </form>
                ):(
                    <button className="btn btn-dark" onClick={ HandleLogout }>Logout</button>
                )
                }
            </div>



        </>
    )
}

export default Login;