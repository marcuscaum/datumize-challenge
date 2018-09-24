import React from 'react';
import PropTypes from 'prop-types';

import { ListItem, ListItemWithDragAnimation } from './index.styled';

const ListItemComponent = ({
  data, children, dragAnimation, ...rest
}) => {
  const ListItemDefined = dragAnimation ? ListItemWithDragAnimation : ListItem;
  return (
    <ListItemDefined {...rest}>
      {data && <span>{data}</span>}
      {children}
    </ListItemDefined>
  );
};

ListItemComponent.propTypes = {
  children: PropTypes.node,
  data: PropTypes.string.isRequired,
  dragAnimation: PropTypes.bool,
};

ListItemComponent.defaultProps = {
  children: null,
  dragAnimation: false,
};

export default ListItemComponent;
