import update from 'immutability-helper';

import { CREATE_PROJECT, DELETE_PROJECT, ASSIGN_USER_TO_PROJECT } from '../actionTypes';

const initialState = [
  {
    id: 1,
    name: 'Trip to space',
    team: [
      {
        role: 'Editor',
        user: 'John Doe',
      },
      {
        role: 'Viewer',
        user: 'Sara',
      },
    ],
  },
  {
    id: 2,
    name: 'Assembly Ikea furniture',
    team: [],
  },
  {
    id: 3,
    name: 'Datumize Zentral',
    team: [],
  },
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

    case ASSIGN_USER_TO_PROJECT: {
      const { id, content } = action.payload;
      const project = state.find(item => item.id === id);
      project.team.push(content);
      return {
        ...state,
        ...project,
      };
    }

    default:
      return state;
  }
};
