import CreateTasks from "./CreateTasks";
import {useRecoilValue} from "recoil";
import {UserState} from "../States/UserState";


const Task=()=>{

    const userData=useRecoilValue(UserState)
    return(

        userData.LoggedIn &&
                <CreateTasks/>

    )
}

export default Task;