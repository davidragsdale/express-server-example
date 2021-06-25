import request from 'supertest';

import app from '../../index.js';

describe('GET:/hello', () => {
  let response;

  beforeAll(async () => {
    response = await request(app).get('/hello');
  });

  it('responds with status 200', () => {
    expect(response.statusCode).toBe(200);
  });

  it('responds with proper content type', () => {
    expect(response.type).toBe('text/plain');
  });

  it('responds with proper body', () => {
    expect(response.text).toBe('Hello, world!');
  });
});
