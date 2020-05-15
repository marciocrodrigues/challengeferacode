import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.cover});
  background-position: center;

  form {

    min-width: 350px;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    textarea {
      max-width: 350px;
      min-width: 350px;
      max-height: 100px;
      min-height: 100px;
      border: 1px solid #000;
      border-radius: 4px;
      padding: 0 15px;
      color: #000;
      margin: 0 0 10px;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
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
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 420px;
  padding: 5px 15px;
`;

export const Content = styled.div`
    margin-top: 20px;
    min-width: 450px;
    min-height: 420px;
    max-height: 420px;
    padding-right: 5px;
    background: rgba(0, 0, 0, 0.6);
    border: 0;
    color: #fff;
    border-radius: 4px;
    display: ${props => props.visible ? 'block' : 'none'};

    ul {
      background: #fff;
      color: #333;
      font-weight: bold;
      margin-top: 2px;
      border-radius: 4px;
      padding: 10px 10px;
    }

    ul {
      margin-top: 15px;
    }
`;
