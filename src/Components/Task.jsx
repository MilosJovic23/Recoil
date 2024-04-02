import CreateTasks from "./CreateTasks";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { UserState } from "../States/UserState";
import { TasksState } from "../States/TasksState";


const Task=()=>{

    const Tasks=useRecoilValue(TasksState);
    const userData=useRecoilValue(UserState);
    const setTaskData=useSetRecoilState(TasksState)
    const deleteTask=(taskName)=>{
        const filteredTasks=Tasks.filter(task=>task!==taskName);
        setTaskData(filteredTasks)

    }
    return(
                <>


                    {userData.LoggedIn &&
                    (
                        <div>
                        {Tasks.map((taskName,index)=>{

                                return(
                                    <div key={index}>
                                        <p>{taskName}</p>
                                        <button type="button" onClick={()=>deleteTask(taskName)}>delete task</button>
                                    </div>
                                )

                            })}


                        <CreateTasks/>
                    </div>

                    )}
                </>



          )
}

export default Task;