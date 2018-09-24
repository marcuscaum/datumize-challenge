import update from 'immutability-helper';

import { CREATE_USER, DELETE_USER } from '../actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_USER: {
      const { content } = action.payload;
      return update(state, { $push: [{ id: state[state.length - 1].id + 1, name: content.name }] });
    }

    case DELETE_USER: {
      const { id } = action.payload;
      return state.filter(item => item.id !== id);
    }

    default:
      return state;
  }
};
