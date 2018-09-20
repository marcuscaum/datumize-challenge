import update from 'immutability-helper';

import { CREATE_PROJECT, DELETE_PROJECT } from '../actionTypes';

const initialState = [
  { id: 1, name: 'Trip to space' },
  { id: 2, name: 'Assembly Ikea furniture' },
  { id: 3, name: 'Datumize Zentral' },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT: {
      const { content } = action.payload;
      return update(state, { $push: [{ id: state[state.length - 1].id + 1, name: content.name }] });
    }

    case DELETE_PROJECT: {
      const { id } = action.payload;
      return state.filter(item => item.id !== id);
    }

    default:
      return state;
  }
};
