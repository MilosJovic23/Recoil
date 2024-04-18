import { useForm } from "react-hook-form";

const CommentForm = ({task, callbackPostComment})=>{

    const {
        register,
        handleSubmit
    }=useForm()
    const PostComment=( data )=>{
        callbackPostComment(data);
    }
    return(

        <>
            <form onSubmit={handleSubmit( PostComment )} className="input-group mb-3 d-flex m-2 gap-2">
                <input {...register("comment")} type="text" className="form-control" placeholder="comment"/>
                <input {...register("taskId")} type="hidden" defaultValue={task.id}/>
                <button className="btn btn-outline-primary">Post Comment</button>
            </form>

        </>


    )
};

export default CommentForm;