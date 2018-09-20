import React from 'react';
import PropTypes from 'prop-types';

const List = ({ data = [], renderItem }) => <section>{data.map(item => renderItem(item))}</section>;

List.propTypes = {
  data: PropTypes.instanceOf(Array),
  renderItem: PropTypes.func.isRequired,
};

List.defaultProps = {
  data: [],
};

export default List;
