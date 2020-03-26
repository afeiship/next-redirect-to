const nx = require('@feizheng/next-js-core2');
require('../src/next-redirect-to');

describe('api.basic test', () => {
  test('nx.redirectTo', function() {
    const obj1 = { name: 'fei' };
    const obj2 = { email: '1290657123@qq.com' };
    const result = {};
    nx.redirectTo(result, obj1, obj2);
    expect(result.name, obj1.name).toBe(null);
  });
});
