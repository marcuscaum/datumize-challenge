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
    case 'FETCH_ROLES_FULFILLED': {
      return {
        isLoading: false,
        data: action.payload,
      };
    }

    case 'FETCH_ROLES_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }

    case 'CREATE_ROLE_FULFILLED': {
      const { content } = action.payload;
      return update(state, {
        data: {
          $push: [
            {
              id: v5(),
              name: content.name,
            },
          ],
        },
      });
    }

    case 'DELETE_ROLE_FULFILLED': {
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
