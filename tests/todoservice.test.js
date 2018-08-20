const getter = require('../src/client');
const todoService = require('../src/todoService');

describe('The task list', async() => {
    let datal;
    beforeEach(async() => {
     datal = await todoService(getter);
    })
    test('should have 5 tasks', async () => {          
        expect(datal.length).toBe(5);
        expect(datal[0].status).toBe('completed');
      });
});