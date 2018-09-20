import remove from 'lodash.remove';

import { CREATE_PROJECT, DELETE_PROJECT } from '../actionTypes';

const initialState = [
  { id: 1, name: 'Trip to space' },
  { id: 2, name: 'Assembly Ikea furniture' },
  { id: 3, name: 'Datumize Zentral' },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT: {
      const { id, content } = action.payload;
      return state.push({
        id,
        name: content.name,
      });
    }

    case DELETE_PROJECT: {
      const { id } = action.payload;
      return remove(state, { id });
    }

    default:
      return state;
  }
};
