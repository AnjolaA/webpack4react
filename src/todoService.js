const getter = require('./client');

const todoService = async(getter) => {
    const data = await getter();
    // console.log(data);
    return data;
};

// todoService(getter);
module.exports = todoService;