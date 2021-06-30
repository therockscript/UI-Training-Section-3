import axios from 'axios';

async function getTaskList() {
    const config = {
        method: 'get',
        url: 'https://api-nodejs-todolist.herokuapp.com/task',
        headers: { 
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRhYzdlNjJkMDc1NDAwMTcyZjgxZGYiLCJpYXQiOjE2MjUwMzI4NjF9.N8Nl6yH2GvHDKSNDnEdzaI34U0ijlErF9dmctv40xnw', 
            'Content-Type': 'application/json'
        }
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
    getTaskList
}