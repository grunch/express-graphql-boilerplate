/* global describe it */
import http from 'http';
import assert from 'assert';
import '../server/index';

describe('Is online express server', () => {
  it('should return 200', () => {
    const options = {
      hostname: '127.0.0.1',
      port: 3000,
      path: '/graphql',
      method: 'POST',
    };
    http.request(options, (res) => {
      assert.equal(200, res.statusCode);
    });
  });
});
