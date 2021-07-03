import axios from 'axios';

async function registerUser(Forminputs) {
    
    const config = {
        method: 'post',
        url: 'https://api-nodejs-todolist.herokuapp.com/user/register',
        headers: { 
			    'Content-Type': 'application/json',
			  },

              data : JSON.stringify(Forminputs)
	   
    }
    const reponse = await axios(config);
    return reponse.data.data;
}
export default registerUser;