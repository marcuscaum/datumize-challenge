import React from 'react';
import { shallow } from 'enzyme';

import UsersListModal from './index';

const setup = props => shallow(<UsersListModal {...props} />);

describe('[Component] UsersListModal', () => {
  it('should render the component', () => {
    const wrapper = setup({});
    expect(wrapper).toMatchSnapshot();
  });
});
