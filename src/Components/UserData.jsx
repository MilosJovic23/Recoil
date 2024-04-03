import {useRecoilValue} from "recoil";
import {UserState} from "../States/UserState";


const UserData=()=>{

    const userData=useRecoilValue(UserState)

    return(
        <p>{userData.LoggedIn}</p>
    )
}

export default UserData;