import {useRecoilValue, useSetRecoilState} from "recoil";
import 'bootstrap/dist/css/bootstrap.min.css';
import {TasksState} from "../States/TasksState";
const GetAllCommentsForPost=( { comments,taskId })=>{

    const Tasks=useRecoilValue(TasksState);
    const setTaskData=useSetRecoilState(TasksState)
    const deleteComment=(comment,taskId)=>{

        const tasksWithComments=Tasks.map(( task )=>{

            if ( task.id ===  taskId ){
                const filteredComments = task.comments.filter( taskComment=> taskComment !== comment );
                return {...task,comments:filteredComments }
            } return task;
        }
            );

        setTaskData(tasksWithComments)
    }

    return (
       <>
           {comments?.map((comment) => (

           <div key={comment} className="m-1 w-100">
               <div className="d-flex gap-2 align-items-center justify-content-between ">
                   <p className="m-0">{comment}</p>
                   <button onClick={() => deleteComment(comment, taskId)}
                           className="btn btn-secondary btn-sm fs-7">delete comment
                   </button>
               </div>
           </div>

           ))
           }
       </>


    )}

export default GetAllCommentsForPost;