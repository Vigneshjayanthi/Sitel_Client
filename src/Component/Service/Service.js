import axios from 'axios';


const AxiosInstace = axios.create({
    baseURL:'https://sitel-asssessment-server.herokuapp.com/posts/'
})

export default AxiosInstace;

