const request = require('supertest');
const app = require('./app');
test('health returns ok', async () => {
  const res = await request(app).get('/health');
  expect(res.body.status).toBe('ok');
});
