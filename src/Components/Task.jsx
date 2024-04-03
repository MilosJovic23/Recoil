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

                                {Object.keys(Tasks).map((task,index)=>{
                                    console.log(Tasks[task])

                                    return (
                                        <div key={index}>
                                            <p>{Tasks[task].name}</p>
                                            <button type="button" onClick={() => deleteTask(Tasks[task].name)}>delete task</button>
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