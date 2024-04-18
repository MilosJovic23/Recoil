import {useRecoilValue, useSetRecoilState} from "recoil";
import 'bootstrap/dist/css/bootstrap.min.css';
import {TasksState} from "../States/TasksState";
const GetAllCommentsforPost=( { comments,taskId })=>{

    const Tasks=useRecoilValue(TasksState);
    const setTaskData=useSetRecoilState(TasksState)
    const deleteComment=(comment,taskId)=>{

        const tasksWithComments=Tasks.map(( task )=>{

            if ( task.id ===  taskId ){
                const filteredComments=task.comments.filter(d=> d !== comment);
                return {...task,comments:filteredComments }
            }else{return task} }
            );


            // console.log(filtered)

        setTaskData(tasksWithComments)
    }

    return(

         comments.map((comment)=> (
                 <div className="m-1 w-100">
                     <div className="d-flex gap-2 align-items-center justify-content-between ">
                         <p className="m-0">{comment}</p>
                         <button onClick={() => deleteComment(comment, taskId)}
                                 className="btn btn-secondary btn-sm fs-7">delete comment
                         </button>
                     </div>
                 </div>


             )
         )


    )
}

export default GetAllCommentsforPost;