import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ name }) => (
  <div>
    <span>{name}</span>
  </div>
);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ListItem;
