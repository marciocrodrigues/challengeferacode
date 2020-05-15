import styled from 'styled-components';
// função da biblioteaca para escurecer cor
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #6D6A6A, #0C0C0C);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  img {
    width: 150px;
    height: 150px;
  }

  legend {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

     .inputGroup input {
      width: 100%;
      background:  rgba(250, 250, 200, 0.1);
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

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #7E310D;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        /** darken escurere a cor utilizando porcentagem */
        background: ${darken(0.03, '#7E310D')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        margin-left: 10px;
      }

      &:hover {
        opacity: 1;
      }
    }

    .inputGroup span {
      width: 100%;
      display: flex;
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
    }
  }
`;
