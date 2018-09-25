import React from 'react';
import { shallow } from 'enzyme';

import Users from './index';

const setup = props => shallow(<Users {...props} />);

describe('[Page] Users', () => {
  it('should render the page', () => {
    const wrapper = setup({
      users: {
        data: [],
      },
      createUser: () => jest.fn(),
      deleteUser: () => jest.fn(),
      fetchUsers: () => jest.fn(),
    });
    expect(wrapper).toMatchSnapshot();
  });
});
