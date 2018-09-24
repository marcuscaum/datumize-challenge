import { combineReducers } from 'redux';

import projects from './projects';
import roles from './roles';
import users from './users';

export default combineReducers({
  projects,
  roles,
  users,
});
