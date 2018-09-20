import { connect } from 'react-redux';

import { getProjects } from '../../redux/selectors';
import ProjectsPage from '../../pages/Projects';

export default connect(
  state => ({ projects: getProjects(state) }),
  {},
)(ProjectsPage);
