const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
    it('responds with json message', async () => {
        const response = await request(app)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200);

        expect(response.body.message).toBe('Hello CI/CD World!');
    });
});