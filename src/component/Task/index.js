import {Trash} from "phosphor-react";

function Task({task,deleteOnAction}){
    return(
        <div className="block bg-purple-800 w-48 p-3 m-1 text-white rounded-lg">
            {task.name}
            <a className="float-right" onClick={()=>deleteOnAction()}>
                <Trash  weight="bold" size="24" />
            </a>
        </div>
    )
}

export default Task;