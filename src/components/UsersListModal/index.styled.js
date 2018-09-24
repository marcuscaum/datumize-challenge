import styled from 'styled-components';

export const UnassignUserButton = styled.div`
  display: flex;
  height: 25px;
  margin-bottom: -15px;
  font-weight: 600;
  padding: 10px;
  justify-content: center;
  text-align: center;
  color: white;
  background-color: tomato;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
`;

export const ListContainer = styled.div`
  height: 250px;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0 20px;
  margin-bottom: 15px;

  li:hover {
    cursor: pointer;
    background-color: #f3f3f3;
  }
`;
