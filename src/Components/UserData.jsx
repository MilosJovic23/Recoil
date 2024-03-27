import { useRecoilValue } from "recoil";
import { UserState } from "../States/UserState";


const UserData=()=>{

    const userData=useRecoilValue(UserState)

    console.log(userData)

    return(
        <p>{userData.LoggedIn}</p>
    )
}

export default UserData;