import React from 'react';
import PropTypes from 'prop-types';

import List from './index.styled';

const ListComponent = ({ data = [], renderItem }) => (
  <List>{data.map(item => renderItem(item))}</List>
);

ListComponent.propTypes = {
  data: PropTypes.instanceOf(Array),
  renderItem: PropTypes.func.isRequired,
};

ListComponent.defaultProps = {
  data: [],
};

export default ListComponent;
