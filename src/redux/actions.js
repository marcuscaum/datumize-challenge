import { createAsyncAction } from 'redux-promise-middleware-actions';

export const createActions = {
  project: content => ({
    type: 'CREATE_PROJECT',
    payload: { content },
  }),
  role: content => ({
    type: 'CREATE_ROLE',
    payload: { content },
  }),
  user: content => ({
    type: 'CREATE_USER',
    payload: { content },
  }),
};

export const deleteActions = {
  project: id => ({
    type: 'DELETE_PROJECT',
    payload: { id },
  }),
  role: id => ({
    type: 'DELETE_ROLE',
    payload: { id },
  }),
  user: id => ({
    type: 'DELETE_USER',
    payload: { id },
  }),
};

export const assignUserToProject = (id, content) => ({
  type: 'ASSIGN_USER_TO_PROJECT',
  payload: { id, content },
});

export const fetchProjects = createAsyncAction('FETCH_PROJECTS', () => fetch('https://api.myjson.com/bins/a72x0').then(response => response.json()));
export const fetchRoles = createAsyncAction('FETCH_ROLES', () => fetch('https://api.myjson.com/bins/1dq9hg').then(response => response.json()));
export const fetchUsers = createAsyncAction('FETCH_USERS', () => fetch('https://api.myjson.com/bins/uqjac').then(response => response.json()));
