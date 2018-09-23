import styled from 'styled-components';

export default styled.input`
  padding: 15px;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  flex: 1;
  border: ${({ requiredField }) => (requiredField ? '1px solid red' : 'none')};
  margin-right: 10px;
  &:focus {
    outline: none;
  }
`;
