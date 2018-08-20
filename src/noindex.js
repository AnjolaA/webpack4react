const todoService = require('./todoService');
const getter = require('./client');

(async()=> {
    const data = await todoService(getter);
    console.log(data);
})();