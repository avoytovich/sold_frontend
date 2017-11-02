import { browserHistory } from 'react-router';

const checkAuth = () => {
  !sessionStorage.getItem('token') && browserHistory.push('/');
};

export default checkAuth;
