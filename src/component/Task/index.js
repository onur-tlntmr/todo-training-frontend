import './style.css'

function Task({task,deleteOnAction}){
    return(
        <div className="task-container">
            {task.name}
            <button onClick={deleteOnAction} >del</button>
        </div>
    )
}

export default Task;