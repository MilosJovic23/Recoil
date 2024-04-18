import { useRecoilValue, useSetRecoilState } from "recoil";
import { TasksState } from "../States/TasksState";
import { useForm } from "react-hook-form";
import { TaskValidator } from "../Validators/TaskValidator";
import { useState } from "react";
import { TaskCategories } from "../TasksCategories/TaskCategories";
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateTasks= ()=>{

    const {
        register,
        handleSubmit,
        formState:{errors}
        } =useForm()
    const setTasks=useSetRecoilState(TasksState)
    const Tasks=useRecoilValue(TasksState);
    const [taskNameError,setTaskNameError]=useState("");
    let taskFound=false;


    const onSubmit= (data)=>{

        Tasks.map((task)=>{
            if( task.name === data.taskName ){
                setTaskNameError("Postoji task sa takvim imenom");
                taskFound = true;
            }
        })

         if(!taskFound){
             const time=new Date();
             const idByCurrentTime=`${time.getHours()}${time.getMinutes()}${time.getSeconds()}${time.getMilliseconds()}`;

            setTasks((tasks)=>[...tasks,{ "id":idByCurrentTime,"name":data.taskName, "category":data.taskCategory }])
            setTaskNameError("")
        }
        return;
    }

    const deleteAllTasks=()=>{
        setTasks([])
    }

    return(
        <>
            <form className="createTask" onSubmit={ handleSubmit(onSubmit) }>

                { !taskFound && (<p>{taskNameError}</p>) }
                { errors.taskName && ( <p>{errors.taskName.message}</p> ) }
                <input type="text" placeholder="Task name" {...register("taskName", TaskValidator )}/>
                <select {...register("taskCategory")} >{TaskCategories.map((task,index) => {
                    return <option key={ index }>{task}</option>
                })}</select>
                <button>CreateTask</button>
                <button type="button" onClick={ deleteAllTasks }>Delete All</button>

            </form>

        </>
    )
};

export default CreateTasks;