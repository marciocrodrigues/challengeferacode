import styled from 'styled-components';

export const Container = styled.div`
    input {
      width: 100%;
      background: rgba(250, 250, 200, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      /** Altera cor do placeholder */
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      width: 100%;
      display: flex;
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
    }
`;
