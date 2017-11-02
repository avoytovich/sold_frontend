const defaults = require('superagent-defaults');
const superagent = defaults();

const request = () => {
  const token = sessionStorage.getItem('token');
  const header = 'x-access-token';

  return superagent.set(header, token);
};

export { request };
