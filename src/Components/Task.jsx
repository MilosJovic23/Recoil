import CreateTasks from "./CreateTasks";
import { useRecoilValue } from "recoil";
import { UserState } from "../States/UserState";
import { TasksState } from "../States/TasksState";


const Task=()=>{

    const Tasks=useRecoilValue(TasksState);
    const userData=useRecoilValue(UserState);
    console.log(Tasks)

    return(

            userData.LoggedIn &&
            ( <div>
                    <CreateTasks/>





            </div>

            )


          )
}

export default Task;