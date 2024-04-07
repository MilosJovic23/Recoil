import CreateTasks from "./CreateTasks";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { UserState } from "../States/UserState";
import { TasksState } from "../States/TasksState";
import {useState} from "react";


const Task=()=>{

    const Tasks=useRecoilValue(TasksState);
    const userData=useRecoilValue(UserState);
    const setTaskData=useSetRecoilState(TasksState);
    const [editToDo,setEditToDo]=useState(false);
    const [editTaskName,setEditTaskName]=useState("")
    const deleteTask=( taskName )=>{

        const filteredTasks=Tasks.filter( (task)=> task.name !== taskName )
        setTaskData(filteredTasks)

    }
    const editTask=(task,id)=>{
        console.log(task,id)
        setEditToDo(true)
    }
    const saveTask=()=>{
        setEditToDo(false);
        console.log(editTaskName)
    }
    return(
                <>
                    {userData.LoggedIn &&
                    (
                        <div>

                                {Tasks.map((task,index)=>{

                                    return (
                                        <div key={index}>
                                            <p>{task.name}</p>
                                            { !editToDo ?
                                                ( <button type="button" onClick={ editTask }>edit</button>):
                                                (<div>
                                                        <button type="button"  onClick={() => saveTask(task.name, task.id)}>save</button>
                                                        <input type="text" onInput={(e)=>setEditTaskName(e.currentTarget.value)}/>
                                                </div>
                                                )}

                                            <button type="button" onClick={() => deleteTask(task.name)}>delete task
                                            </button>
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