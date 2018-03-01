import { renderComponent , expect } from '../test_helper';
import { Logo } from '../../src/components/Logo/Logo';

describe('Logo' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Logo);
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });
});
