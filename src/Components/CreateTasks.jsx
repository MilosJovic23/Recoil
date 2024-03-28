import {useState} from "react";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {TasksState} from "../States/TasksState";


const CreateTasks= ()=>{

    const [taskName,setTaskName]=useState()
    const setTasks=useSetRecoilState(TasksState)
    const Tasks=useRecoilValue(TasksState)
    console.log(typeof Tasks)
    console.log(Tasks)

    const createTask= ()=>{
        setTasks(tasks=>[...tasks,taskName])
    }
    const deleteAllTasks= ()=>{
        setTasks([])
    }

    return(
        <>
            {Tasks.map((el,index)=>{

                const deleteTask=()=>{console.log("test")}
                return (
                    <div>
                        <p>{el}</p>
                        <button type="button" key={index} onClick={deleteTask}>delete</button>
                    </div>

                )
            })}
            <input type="text" onInput=
                {e => setTaskName(e.currentTarget.value)}/>
            <button type="button" onClick={createTask}>CreateTask</button>
            <button type="button" onClick={deleteAllTasks}>DeleteAll</button>
        </>
    )

};

export default CreateTasks;