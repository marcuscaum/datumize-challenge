export const getProjects = state => state.projects;
export const getRoles = state => state.roles;
export const getUsers = state => state.users;
export const getProjectById = (state, id) => state.projects.data.find(project => project.id === id);
