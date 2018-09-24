import update from 'immutability-helper';
import v5 from 'uuid';

export default (
  state = {
    isLoading: false,
    data: [],
  },
  action,
) => {
  switch (action.type) {
    case 'FETCH_PROJECTS_FULFILLED': {
      return {
        isLoading: false,
        data: action.payload,
      };
    }

    case 'FETCH_PROJECTS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }

    case 'UPDATE_PROJECT_FULFILLED': {
      return {
        ...state,
      };
    }

    case 'CREATE_PROJECT_FULFILLED': {
      const { content } = action.payload;
      return update(state, {
        data: {
          $push: [
            {
              id: v5(),
              team: [],
              ...content,
            },
          ],
        },
      });
    }

    case 'DELETE_PROJECT_FULFILLED': {
      const { id } = action.payload;
      const data = state.data.filter(item => item.id !== id);

      return {
        ...state,
        data,
      };
    }

    case 'VALIDATE_PROJECT_TEAM': {
      const { id, content } = action.payload;

      const projectIndex = state.data.findIndex(item => item.id === id);
      const { team } = state.data[projectIndex];

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
          data: {
            [projectIndex]: {
              team: {
                $splice: [[teamMemberIndexByName, 1]],
                [teamMemberIndexByRole]: {
                  name: { $set: content.name },
                },
              },
            },
          },
        });
      }

      // If user is not on the team but the role is already taken,
      // remove the user with the role from the team and add the new user on the team using his role
      if (teamMemberIndexByName >= 0 && teamMemberIndexByRole < 0) {
        return update(state, {
          data: {
            [projectIndex]: {
              team: {
                $splice: [[teamMemberIndexByName, 1]],
                $push: [{ ...content }],
              },
            },
          },
        });
      }

      // If the role is already taken,
      // just update with the new user
      if (teamMemberIndexByRole >= 0) {
        return update(state, {
          data: {
            [projectIndex]: {
              team: {
                [teamMemberIndexByRole]: {
                  name: { $set: content.name },
                },
              },
            },
          },
        });
      }

      return update(state, {
        data: {
          [projectIndex]: {
            team: {
              $push: [{ ...content }],
            },
          },
        },
      });
    }

    default:
      return state;
  }
};
