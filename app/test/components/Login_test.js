import { renderComponent , expect } from '../test_helper';
import { Login } from '../../src/components/Login/Login';

describe('Login' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Login);
  });

  it('shows a email input', () => {
    expect(component.find('.email')).to.exist;
  });

  it('shows a password input', () => {
    expect(component.find('.password')).to.exist;
  });

});
