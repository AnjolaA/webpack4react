const todoService = require('../src/todoService');
const getter = require('../src/client');
const nock = require('nock');
import axios from 'axios' // v0.15.3
import httpAdapter from 'axios/lib/adapters/http'

const host = 'http://5b71e6c7586eb5001463a7a0.mockapi.io';
axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

  describe('The task list', async() => {
    const fakeResponse = [{ status: 'completed',
    _id: '1',
    name: 'Clean Toilet',
    Created_date: '2018-06-15T12:46:08.494Z',
    __v: 0 
    }];
    beforeAll(() => {
        nock.cleanAll();
    })
    beforeEach(() => {
        nock.disableNetConnect();
    });

    afterEach(() => nock.cleanAll());
    test('should have 5 tasks', async () => {
        nock(host)
            .get('/tasks')
            .reply(200, fakeResponse);

        const datal = await getter();
        expect(datal.length).toBe(1);
        expect(datal[0].status).toBe('completed');
      });
});