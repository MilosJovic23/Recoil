import CreateTasks from "./CreateTasks";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { UserState } from "../States/UserState";
import { TasksState } from "../States/TasksState";


const Task=()=>{

    const Tasks=useRecoilValue(TasksState);
    const userData=useRecoilValue(UserState);
    const setTaskData=useSetRecoilState(TasksState);

    const deleteTask=( taskName )=>{

        const filteredTasks=Tasks.filter( (task)=> task.name !== taskName )
        setTaskData(filteredTasks)

    }
    return(
                <>
                    {userData.LoggedIn &&
                    (
                        <div>

                                {Tasks.map((task,index)=>{

                                    return (
                                        <div key={index}>
                                            <p>{ task.name }</p>
                                            <button type="button" onClick={ () => deleteTask( task.name ) }>delete task</button>
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