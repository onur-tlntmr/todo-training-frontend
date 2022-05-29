import {useEffect, useState} from "react";
import Task from "../../component/Task";
import CreateTask from "../../component/CreateTask";
import TaskApi from "../../api/TaskApi";

function TaskScreen() {

    const [tasks, setTasks] = useState([]);

    const getTasks = () => {
        TaskApi.getAll().then(resp => {
            setTasks(resp.data);
        });
    };

    const insertTask = task =>
    {
        TaskApi.insert(task).then(resp => {
            getTasks();
        });
    }


    const deleteTask = (task) => {
        TaskApi.delete(task).then(() => getTasks());
    };

    useEffect(() => getTasks(), []);

    return (

        <div className="task-list">
            <div className="">
                <CreateTask submitAction={insertTask}/>
            </div>

            <div>
                {
                    tasks.map((task, index) =>
                        <Task key={index} task={task} deleteOnAction={() => deleteTask(task)}/>)
                }
            </div>
        </div>

    )
}

export default TaskScreen;