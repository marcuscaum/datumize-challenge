import update from 'immutability-helper';

export default (
  state = {
    isLoading: false,
    data: [],
  },
  action,
) => {
  switch (action.type) {
    case 'FETCH_USERS_FULFILLED': {
      const { users } = action.payload;
      return {
        isLoading: false,
        data: users,
      };
    }

    case 'FETCH_USERS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }

    case 'CREATE_USER': {
      const { content } = action.payload;
      return update(state, {
        data: {
          $push: [
            {
              id: state.data[state.data.length - 1].id + 1,
              name: content.name,
            },
          ],
        },
      });
    }

    case 'DELETE_USER': {
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
