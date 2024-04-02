import {useRecoilValue, useSetRecoilState} from "recoil";
import { TasksState } from "../States/TasksState";
import { useForm } from "react-hook-form";
import { TaskValidator } from "../Validators/TaskValidator";
import { useState } from "react";


const CreateTasks= ()=>{

    const { register,handleSubmit,formState:{errors} } =useForm()
    const setTasks=useSetRecoilState(TasksState)
    const Tasks=useRecoilValue(TasksState);
    const [taskNameError,setTaskNameError]=useState("");
    let taskFound=false;
    const onSubmit= (data)=>{
        if(Tasks.includes(data.taskName)){
            setTaskNameError("Postoji task sa tim imenom");
            taskFound=true;
            return;
        }
        setTasks(tasks=>[...tasks,data.taskName])
        setTaskNameError("")
    }
    const deleteAllTasks= ()=>{
        setTasks([])
    }

    return(
        <>
            <form onSubmit={ handleSubmit(onSubmit) }>
                {!taskFound && (<p>{taskNameError}</p>)}
                { errors.taskName && (<p>{errors.taskName.message}</p>) }
                <input type="text" {...register("taskName", TaskValidator )}/>
                <button>CreateTask</button>
                <button type="button" onClick={ deleteAllTasks }>DeleteAll</button>
            </form>

        </>
    )

};

export default CreateTasks;