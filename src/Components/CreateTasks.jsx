
import {useRecoilValue, useSetRecoilState } from "recoil";
import { TasksState } from "../States/TasksState";
import { useForm } from "react-hook-form";
import { TaskValidator } from "../Validators/TaskValidator";


const CreateTasks= ()=>{

    const { register,handleSubmit,formState:{errors} } =useForm()
    const setTasks=useSetRecoilState(TasksState)
    const Tasks=useRecoilValue(TasksState);

    const onSubmit= (data)=>{
        console.log(data,Tasks)
        setTasks(tasks=>[...tasks,data.taskName])
    }
    const deleteAllTasks= ()=>{
        setTasks([])
    }

    return(
        <>
            <form onSubmit={ handleSubmit(onSubmit) }>
                {errors.taskName && ( <p>{errors.taskName.message}</p> )}
                <input type="text" {...register("taskName", TaskValidator )}/>
                <button>CreateTask</button>
                <button type="button" onClick={ deleteAllTasks }>DeleteAll</button>
            </form>

        </>
    )

};

export default CreateTasks;