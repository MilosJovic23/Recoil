import {useState} from "react";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {TasksState} from "../States/TasksState";


const CreateTasks=()=>{
    const [taskName,setTaskName]=useState()

    const setTasks=useSetRecoilState(TasksState)
    const Tasks=useRecoilValue(TasksState)
    console.log(taskName,Tasks)
    const createTask=()=>{
        setTasks(taskName)
    }
    return(
        <>
            <input type="text" onInput={e=>setTaskName(e.currentTarget.value)}/>
            <button type="button" onClick={createTask}>CreateTask</button>
        </>
    )




};

export default CreateTasks;