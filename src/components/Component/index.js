import React from 'react';
import { lifecycle } from 'recompose';
import PropTypes from 'prop-types';

const Component = ({ children }) => <React.Fragment>{children}</React.Fragment>;

Component.propTypes = {
  children: PropTypes.node.isRequired,
};

export default lifecycle({
  componentWillMount() {
    this.props.onMount();
  },
})(Component);
