import axios from 'axios';

const headers = { 
    'Content-Type': 'application/json'
}

const updateTokenHeader = () => {
    console.log("updateTokenHeader start");
    // Add a request interceptor
    axios.interceptors.request.use(function (config) {
        const token = localStorage.getItem("todo_login_token");
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    });
}

async function addTask(task) {
    const config = {
        method: 'post',
        url: 'https://api-nodejs-todolist.herokuapp.com/task',
        headers: headers,
        data : JSON.stringify(task)
    }
    const reponse = await axios(config);
    return reponse.data.data;
}

async function updateTaskStatus(taskId, status) {
    const payload = {
        "completed": status
    }
    const config = {
        method: 'put',
        url: `https://api-nodejs-todolist.herokuapp.com/task/${taskId}`,
        headers: headers,
        data: JSON.stringify(payload)
    }
    const reponse = await axios(config);
    return reponse.data.data;  
}

async function deleteTask(taskId) {
    const config = {
        method: 'delete',
        url: `https://api-nodejs-todolist.herokuapp.com/task/${taskId}`,
        headers: headers
    }
    const reponse = await axios(config);
    return reponse.data.data;
}

async function getTaskList() {
    const config = {
        method: 'get',
        url: 'https://api-nodejs-todolist.herokuapp.com/task',
        headers: headers
    }
    const reponse = await axios(config);
    return reponse.data.data;
    // then(function (response) {
    //     console.log(JSON.stringify(response.data));
    // }).catch(function (error) {
    //     console.log(error);
    // });
}

export {
    getTaskList,
    addTask,
    deleteTask,
    updateTaskStatus,
    updateTokenHeader
}