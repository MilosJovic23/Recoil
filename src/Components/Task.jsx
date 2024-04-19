import CreateTasks from "./CreateTasks";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { UserState } from "../States/UserState";
import { TasksState } from "../States/TasksState";
import {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import { NewTaskNameValidator } from "../Validators/NewTaskNameValidator";
import { TaskCategories } from "../TasksCategories/TaskCategories";
import 'bootstrap/dist/css/bootstrap.min.css';
import CommentForm from "./CommentForm";
import GetAllComments from "./GetAllComments";
import GetAllCommentsforPost from "./GetAllComments";
import GetAllCommentsForPost from "./GetAllComments";
const Task = () =>{
    const Tasks=useRecoilValue(TasksState);
    const userData=useRecoilValue(UserState);
    const setTaskData=useSetRecoilState(TasksState);
    const {register,
        handleSubmit,
        formState:{errors},
        reset
        }=useForm()
    const [editTaskId,setEditTaskId]=useState()

    const deleteTask=( taskName )=>{

        const filteredTasks=Tasks.filter( (task)=> task.name !== taskName )
        setTaskData(filteredTasks)

    }
    const newCommentPosted=(data)=>{


               const tasksWithComments=Tasks.map(( task )=>{

                   let existingComments=[]
                   if(Array.isArray(task.comments)){
                       existingComments =task.comments;
                   }
                  return task.id ===  data.taskId ?
                        {...task,comments:[...existingComments,data.comment]}
                        :
                        task
               });
                setTaskData(tasksWithComments)
    }
    const updateTask=( data )=>{
        setEditTaskId(null)

        const updatedTasks=Tasks.map(( task )=>{
            return task.id === editTaskId ?
                { "id":data.taskId,"name":data.newTaskName,"category":data.taskCategory }
                :
                task
        });
        setTaskData( updatedTasks );
    }


    useEffect(() => {
        if( editTaskId !== undefined ){
            const task=Tasks.find( t=> t.id === editTaskId );

            if(task){
                reset(
                    {
                        taskId: task.id,
                        newTaskName : task.name,
                        taskCategory:task.category
                    }
                )
            }
        }
    }, [editTaskId,reset,Tasks]);

    return(
                <>
                    {
                        userData.LoggedIn && (<div className="Task m-5">
                            <CreateTasks/>
                        </div>)
                    }
                    { userData.LoggedIn &&
                        (

                            <div className="taskHolder mt-2 align-items-center">

                                {Tasks.map((task, index) => {

                                    return (
                                        <div className="singleTask" key={index}>

                                            { editTaskId === task.id ? (
                                                <form className="updateTask" onSubmit={ handleSubmit(updateTask) }>
                                                    {errors.newTaskName && (<p>{errors.newTaskName.message}</p>)}
                                                    <input {...register("taskId")} type="hidden"
                                                           defaultValue={task.id}/>
                                                    <input {...register("newTaskName", NewTaskNameValidator)}
                                                           type="text"  defaultValue={task.name}/>
                                                    <select {...register("taskCategory")}
                                                            defaultValue={task.category}>{TaskCategories.map((category) => {
                                                        return <option>{category}</option>
                                                    })}
                                                    </select>
                                                    <button>update Task</button>
                                                </form>
                                            ) : (
                                                <span>
                                                    <h2 className="m-0 p-0"
                                                        onClick={() => setEditTaskId( task.id )}>{ task.name }</h2>
                                                    <p className="mb-3 p-0"
                                                       onClick={() => setEditTaskId( task.id )}>{ task.category }</p>
                                                    <button className="p-1 btn btn-dark rounded-1 btn-sm" type="button" onClick={() => deleteTask( task.name )}>delete
                                                        task
                                                    </button>
                                                    <CommentForm task={ task }  callbackPostComment = { newCommentPosted }/>
                                                    <GetAllCommentsForPost  comments={task.comments} taskId={task.id}/>

                                                </span>

                                            )
                                            }


                                        </div>

                                    )
                                })}


                            </div>

                        )}
                </>


    )
}

export default Task;