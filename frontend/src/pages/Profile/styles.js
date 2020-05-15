import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  border-radius: 4px;
  padding: 10px 10px;
  max-width: 600px;
  margin: 50px auto;
  background: #0C0C0C;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
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
        background: ${darken(0.08, '#7E310D')};
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
  }

  > button {
      width: 100%;
      margin: 10px 0 0;
      height: 44px;
      background: #C04006;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        /** darken escurere a cor utilizando porcentagem */
        background: ${darken(0.08, '#C04006')};
      }
    }
`;
