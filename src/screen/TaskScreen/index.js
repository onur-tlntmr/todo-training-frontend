import {useEffect, useState} from "react";
import axios from "axios";
import Task from "../../component/Task";
import './style.css'
import {useForm} from "react-hook-form";



function TaskScreen(){

    const baseURL = "http://127.0.0.1:8080/api/v1/tasks/";

    const [tasks,setTasks] = useState([]);

    const {register,handleSubmit,formState: {errors}} = useForm();

    const insertFormSubmit = data => insertTask(data);


    const getTasks = () =>{
      axios.get(baseURL).then((resp)=>
          setTasks(resp.data)
      )
    };

    const insertTask = (task) =>{
      axios.post(baseURL,task).then((resp) => {
        if(resp.status === 200)
            getTasks();

      });
    };

    const deleteTask = (task) =>{
        axios.delete(baseURL+task.id).then((resp) => {
            if(resp.status === 200)
                getTasks();
        });
    };

    useEffect(()=>getTasks,[]);

    return(

        <div className="task-list">
            <div className="task-insert-container">
                <form onSubmit={handleSubmit(insertFormSubmit)}>
                    {errors.name && <span>Name is required</span>}<br/>
                    <input {...register("name",{required:true,maxLength:10})} />
                    <input type="submit" />
                </form>
            </div>

            <div>
                {
                    tasks.map((task,index) =>
                        (<Task key={index} task={task} deleteOnAction={  () => deleteTask(task)} />))
                }
            </div>
        </div>





    )
}

export default TaskScreen;