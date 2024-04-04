import { useRecoilValue, useSetRecoilState } from "recoil";
import { TasksState } from "../States/TasksState";
import { useForm } from "react-hook-form";
import { TaskValidator } from "../Validators/TaskValidator";
import { useState } from "react";
import {TaskCategories} from "../TasksCategories/TaskCategories";


const CreateTasks= ()=>{

    const { register,handleSubmit,formState:{errors} } =useForm()
    const setTasks=useSetRecoilState(TasksState)
    const Tasks=useRecoilValue(TasksState);
    const [taskNameError,setTaskNameError]=useState("");
    let taskFound=false;
    const onSubmit= (data)=>{

        console.log(Tasks)

        Object.keys(Tasks).map((task)=>{
            if( Tasks[task].name === data.taskName ){
                setTaskNameError("Postoji task sa takvim imenom");
                taskFound = true;
            }
        })

         if(!taskFound){
             const time=new Date();
             const idByCurrentTime=` ${time.getHours()}${time.getMinutes()}${time.getSeconds()}${time.getMilliseconds()} `;

            setTasks((tasks)=>[...tasks,{ "id":idByCurrentTime,"name":data.taskName, "category": data.taskCategory }])
            setTaskNameError("")
        }
        return;
    }

    const deleteAllTasks=()=>{
        setTasks([])
    }

    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                {!taskFound && (<p>{taskNameError}</p>)}
                {errors.taskName && (<p>{errors.taskName.message}</p>)}
                <input type="text" {...register("taskName", TaskValidator)}/>
                <select {...register("taskCategory")} >{TaskCategories.map((task) => {
                    return <option>{task}</option>
                })}</select>
                <button>CreateTask</button>
                <button type="button" onClick={deleteAllTasks}>Delete All</button>

            </form>

        </>
    )

};

export default CreateTasks;