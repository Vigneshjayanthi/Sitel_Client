import axios from 'axios';


const AxiosInstace = axios.create({
    baseURL:' https://post-app-sitel-assessment.herokuapp.com/posts/'
})

export default AxiosInstace;

