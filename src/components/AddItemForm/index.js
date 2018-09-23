import React from 'react';
import PropTypes from 'prop-types';
import { withState, withHandlers, compose } from 'recompose';

import AddItemForm from './index.styled';
import TextField from '../../styles/TextField.styled';
import Button from '../../styles/Button.styled';

const AddItemFormComponent = ({
  buttonLabel,
  action,
  onChangeValue,
  formValues,
  fields,
  requiredFieldsState,
  validateField,
}) => (
  <AddItemForm>
    {Object.keys(fields).map(key => (
      <TextField
        key={key}
        required
        placeholder={fields[key]}
        type="text"
        name={key}
        onChange={onChangeValue}
        value={formValues[key]}
        requiredField={requiredFieldsState[key]}
        onKeyPress={(e) => {
          if (e.key === 'Enter' && e.target.value) {
            e.preventDefault();
            action(formValues);
          }
        }}
      />
    ))}
    <Button
      type="button"
      onClick={() => {
        const isEmpty = Object.keys(requiredFieldsState).some((key) => {
          validateField(formValues[key], key);
          return !formValues[key];
        });

        if (isEmpty) return false;
        return action(formValues);
      }}
    >
      {buttonLabel}
    </Button>
  </AddItemForm>
);

AddItemFormComponent.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  validateField: PropTypes.func.isRequired,
  requiredFieldsState: PropTypes.instanceOf(Object).isRequired,
  formValues: PropTypes.instanceOf(Object).isRequired,
  fields: PropTypes.instanceOf(Object).isRequired,
};

export default compose(
  withState('formValues', 'formValuesHandler', ({ dataObject }) => ({ ...dataObject })),
  withState('requiredFieldsState', 'requiredFieldsStateHandler', ({ fields, requiredFields }) => {
    const items = requiredFields || Object.keys(fields);
    return Object.assign({}, ...items.map(item => ({ [item]: false })));
  }),
  withHandlers({
    validateField: ({ requiredFieldsStateHandler, requiredFieldsState }) => (value, key) => {
      requiredFieldsStateHandler({
        ...requiredFieldsState,
        [key]: !value,
      });
    },
  }),
  withHandlers({
    onChangeValue: ({ formValues, formValuesHandler, validateField }) => (e) => {
      validateField(e.target.value, e.target.name);
      return formValuesHandler({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    },
  }),
)(AddItemFormComponent);
