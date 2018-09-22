import React from 'react';
import PropTypes from 'prop-types';
import { withState, withHandlers, compose } from 'recompose';

import AddItem from './index.styled';
import TextField from '../../styles/TextField.styled';
import Button from '../../styles/Button.styled';

const AddItemComponent = ({
  placeholder, onClickSubmit, onChangeValue, formValues, fields,
}) => (
  <AddItem>
    {fields.map(key => (
      <TextField
        placeholder={placeholder}
        type="text"
        name={key}
        onChange={onChangeValue}
        value={formValues[key]}
      />
    ))}
    <Button type="button" onClick={() => onClickSubmit(formValues)}>
      Submit
    </Button>
  </AddItem>
);

AddItemComponent.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onClickSubmit: PropTypes.func.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  formValues: PropTypes.instanceOf(Object).isRequired,
  fields: PropTypes.instanceOf(Array).isRequired,
};

export default compose(
  withState('formValues', 'formValuesHandler', ({ dataObject }) => ({ ...dataObject })),
  withHandlers({
    onChangeValue: ({ formValues, formValuesHandler }) => evt => formValuesHandler({
      ...formValues,
      [evt.target.name]: evt.target.value,
    }),
  }),
)(AddItemComponent);
