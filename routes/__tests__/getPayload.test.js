import request from 'supertest';

import app from '../../index.js';

describe('GET:/payload', () => {
  let response;

  beforeAll(async () => {
    response = await request(app).get('/payload');
  });

  it('responds with status 200', () => {
    expect(response.statusCode).toBe(200);
  });

  it('responds with proper content type', () => {
    expect(response.type).toBe('application/json');
  });

  it('responds with proper body', () => {
    expect(typeof response.body).toBe('object');
    expect(response.body.userId).toBe(1);
  });
});
