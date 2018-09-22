import React from 'react';
import PropTypes from 'prop-types';
import { withState, withHandlers, compose } from 'recompose';

import AddItemForm from './index.styled';
import TextField from '../../styles/TextField.styled';
import Button from '../../styles/Button.styled';

const AddItemFormComponent = ({
  placeholder,
  buttonLabel,
  onClickSubmit,
  onChangeValue,
  formValues,
  fields,
}) => (
  <AddItemForm>
    {fields.map(key => (
      <TextField
        key={key}
        placeholder={placeholder}
        type="text"
        name={key}
        onChange={onChangeValue}
        value={formValues[key]}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            onClickSubmit(formValues);
          }
        }}
      />
    ))}
    <Button type="button" onClick={() => onClickSubmit(formValues)}>
      {buttonLabel}
    </Button>
  </AddItemForm>
);

AddItemFormComponent.propTypes = {
  placeholder: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  onClickSubmit: PropTypes.func.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  formValues: PropTypes.instanceOf(Object).isRequired,
  fields: PropTypes.instanceOf(Array).isRequired,
};

export default compose(
  withState('formValues', 'formValuesHandler', ({ dataObject }) => ({ ...dataObject })),
  withHandlers({
    onChangeValue: ({ formValues, formValuesHandler }) => e => formValuesHandler({
      ...formValues,
      [e.target.name]: e.target.value,
    }),
  }),
)(AddItemFormComponent);
