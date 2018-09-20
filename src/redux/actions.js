import { CREATE_PROJECT, DELETE_PROJECT } from './actionTypes';

export const createProject = content => ({
  type: CREATE_PROJECT,
  payload: { content },
});

export const deleteProject = id => ({
  type: DELETE_PROJECT,
  payload: { id },
});
