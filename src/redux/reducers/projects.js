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
      const { id, content } = action.payload;
      const projectIndex = state.data.findIndex(project => project.id === id);

      return update(state, {
        data: {
          [projectIndex]: {
            $set: {
              ...content,
            },
          },
        },
      });
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

    default:
      return state;
  }
};
