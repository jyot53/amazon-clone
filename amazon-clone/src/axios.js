import axios from 'axios';

const instance = axios.create({
    baseURL:'http://localhost:5001/clone-d23b5/us-central1/api' //the api url (cloud function url)
});

export default instance;