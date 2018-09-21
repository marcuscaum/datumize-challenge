import styled from 'styled-components';

const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  background: #00000070;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  display: flex;
  width: 550px;
  height: 350px;
  background: white;
`;

export default {
  Container: ModalContainer,
  Content: ModalContent,
};
