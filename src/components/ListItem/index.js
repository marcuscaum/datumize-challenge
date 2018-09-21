import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './index.styled';

const ListItemComponent = ({ data, children, ...rest }) => (
  <ListItem {...rest}>
    {data && <span>{data}</span>}
    {children}
  </ListItem>
);

ListItemComponent.propTypes = {
  children: PropTypes.node,
  data: PropTypes.string.isRequired,
};

ListItemComponent.defaultProps = {
  children: null,
};

export default ListItemComponent;
