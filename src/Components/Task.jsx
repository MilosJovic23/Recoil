import CreateTasks from "./CreateTasks";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { UserState } from "../States/UserState";
import { TasksState } from "../States/TasksState";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {NewTaskNameValidator} from "../Validators/NewTaskNameValidator";
import {TaskCategories} from "../TasksCategories/TaskCategories";

const Task = () =>{
    const Tasks=useRecoilValue(TasksState);
    const userData=useRecoilValue(UserState);
    const setTaskData=useSetRecoilState(TasksState);
    const [isEdited,setIsEdited]=useState(false);
    const {register,handleSubmit,formState:{errors}}=useForm()
    const [id,setId]=useState("")

    const deleteTask=( taskName )=>{

        const filteredTasks=Tasks.filter( (task)=> task.name !== taskName )
        setTaskData(filteredTasks)

    }

    const editTask=( id )=>{
        setIsEdited(true);
        setId( id );
    }
    const onSubmit=( data )=>{

        const updatedTasks=Tasks.map(( task )=>{

            return task.id === id ?
                { "id":id,"name":data.newTaskName,"category":data.taskCategory }
                : task ;

        });
        setTaskData( updatedTasks );
        setIsEdited(false);

    }

    return(
                <>
                    { isEdited && (
                        <form onSubmit={ handleSubmit(onSubmit) }>
                            { errors.newTaskName && ( <p>{ errors.newTaskName.message }</p> )}
                            <input {...register("newTaskName", NewTaskNameValidator )}></input>
                            <select {...register("taskCategory")} >{ TaskCategories.map((task) => {
                                return <option>{task}</option>})}</select>
                            <button>save</button>
                        </form>

                    )}
                    { userData.LoggedIn &&
                        (
                            <div>

                            { Tasks.map((task,index)=>{

                                    return (
                                        <>
                                            <div key={index}>
                                                <p>{task.name}</p>
                                                <button type="button" onClick={() => editTask(task.id)}>edit</button>
                                                <button type="button" onClick={() => deleteTask(task.name)}>delete
                                                    task
                                                </button>
                                            </div>

                                            <form key={index}>
                                                <input type="text" value={task.name}/>
                                            </form>
                                        </>

                                    )
                            })}

                                <CreateTasks/>

                            </div>
                        )}
                </>


    )
}

export default Task;