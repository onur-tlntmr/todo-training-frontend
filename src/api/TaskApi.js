import baseURL from "./Constants";
import axios from "axios";

class TaskApi {

    async getAll(){
        return await axios.get(baseURL);
    }

    async insert(task){
        return await axios.post(baseURL, task);
    }

    async delete(task){
        return await axios.delete(baseURL + task.id);
    }

}

export default new TaskApi();