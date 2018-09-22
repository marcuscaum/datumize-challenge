import update from 'immutability-helper';

import { CREATE_PROJECT, DELETE_PROJECT, ASSIGN_USER_TO_PROJECT } from '../actionTypes';

const initialState = [
  {
    id: 1,
    name: 'Trip to space',
    team: [
      {
        role: 'Editor',
        name: 'John Doe',
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
      return update(state, {
        $push: [
          {
            id: state[state.length - 1].id + 1,
            ...content,
          },
        ],
      });
    }

    case DELETE_PROJECT: {
      const { id } = action.payload;
      return state.filter(item => item.id !== id);
    }

    case ASSIGN_USER_TO_PROJECT: {
      const { id, content } = action.payload;

      const projectIndex = state.findIndex(item => item.id === id);
      const { team } = state[projectIndex];

      const teamMemberIndexByRole = team.length
        ? team.findIndex(item => item.role === content.role)
        : -1;
      const teamMemberIndexByName = team.length
        ? team.findIndex(item => item.name === content.name)
        : -1;

      // If the user is already assigned to a role,
      // remove him from the previous role and set him on the new role
      if (teamMemberIndexByName >= 0 && teamMemberIndexByRole >= 0) {
        return update(state, {
          [projectIndex]: {
            team: {
              $splice: [[teamMemberIndexByName, 1]],
              [teamMemberIndexByRole]: {
                name: { $set: content.name },
              },
            },
          },
        });
      }

      // If user is not on the team but the role is already taken,
      // remove the user with the role from the team and add the new user on the team using his role
      if (teamMemberIndexByName >= 0 && teamMemberIndexByRole < 0) {
        return update(state, {
          [projectIndex]: {
            team: {
              $splice: [[teamMemberIndexByName, 1]],
              $push: [{ ...content }],
            },
          },
        });
      }

      // If the role is already taken,
      // just update with the new user
      if (teamMemberIndexByRole >= 0) {
        return update(state, {
          [projectIndex]: {
            team: {
              [teamMemberIndexByRole]: {
                name: { $set: content.name },
              },
            },
          },
        });
      }

      return update(state, {
        [projectIndex]: {
          team: {
            $push: [{ ...content }],
          },
        },
      });
    }

    default:
      return state;
  }
};
