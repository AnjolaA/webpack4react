const axios =require ('axios');
const URL = 'http://5b71e6c7586eb5001463a7a0.mockapi.io/tasks';

const getTasks = async () => {
     const { data } = await axios.get(URL);
    //  console.log(data);
     return data;
};
// getTasks(URL);
module.exports = getTasks;