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
    const [newTaskName,setNewTaskName]=useState("")
    const deleteTask=( taskName )=>{

        const filteredTasks=Tasks.filter( (task)=> task.name !== taskName )
        setTaskData(filteredTasks)

    }

    const editTask=(id)=>{
        setEditToDo(true);

        const updatedTasks=Tasks.map((task)=>{

            return task.id===id ?
                {"id":id,"name":newTaskName,"category":task.category}
                :
                task
        })
        setTaskData(updatedTasks)

    }
    const saveTask=(newName)=>{
        setNewTaskName(newName)

    }

    return(
                <>
                    { editToDo && (
                        <div>
                            <input onInput={e=>saveTask(e.currentTarget.value)}></input>
                            <button onClick={saveTask}>save</button>
                        </div>

                    )}
                    {userData.LoggedIn &&
                    (
                        <div>

                                {Tasks.map((task,index)=>{

                                    return (
                                        <div key={index}>
                                            <p>{task.name}</p>
                                            <button type="button" onClick={() => editTask(task.id)}>edit</button>
                                            <button type="button" onClick={() => deleteTask(task.name)}>delete task</button>
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