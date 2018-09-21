import update from 'immutability-helper';

import { CREATE_ROLE, DELETE_ROLE } from '../actionTypes';

const initialState = [
  {
    id: 1,
    name: 'admin',
  },
  {
    id: 2,
    name: 'editor',
  },
  {
    id: 3,
    name: 'viewer',
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ROLE: {
      const { content } = action.payload;
      return update(state, { $push: [{ id: state[state.length - 1].id + 1, name: content.name }] });
    }

    case DELETE_ROLE: {
      const { id } = action.payload;
      return state.filter(item => item.id !== id);
    }

    default:
      return state;
  }
};
