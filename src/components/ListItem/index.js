import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './index.styled';

const ListItemComponent = ({ data, children }) => (
  <ListItem>
    {data && <span>{data}</span>}
    {children}
  </ListItem>
);

ListItemComponent.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.string.isRequired,
};

export default ListItemComponent;
