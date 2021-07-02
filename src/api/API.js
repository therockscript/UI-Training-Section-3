import axios from 'axios';

const headers = { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRhYzdlNjJkMDc1NDAwMTcyZjgxZGYiLCJpYXQiOjE2MjUwMzI4NjF9.N8Nl6yH2GvHDKSNDnEdzaI34U0ijlErF9dmctv40xnw', 
    'Content-Type': 'application/json'
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
    updateTaskStatus
}