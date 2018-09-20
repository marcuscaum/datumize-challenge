import { CREATE_PROJECT, DELETE_PROJECT } from './actionTypes';

let nextTodoId = 0;

export const createProject = content => ({
  type: CREATE_PROJECT,
  payload: {
    /* eslint-disable no-plusplus */
    id: ++nextTodoId,
    content,
  },
});

export const deleteProject = id => ({
  type: DELETE_PROJECT,
  payload: { id },
});
