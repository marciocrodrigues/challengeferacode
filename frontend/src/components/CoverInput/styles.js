import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;
  height: 450px;
  width: 450px;

  label {
    cursor: pointer;
    height: 100%;
    width: 100%;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 450px;
      width: 450px;
      border: 3px solid rgba(255, 255, 255, 0.3);
      background: #333;
    }

    input {
      display: none;
    }

  }
`;
