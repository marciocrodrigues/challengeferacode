import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
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
  .display-block {
    display: block;
  }

  .display-none {
    display: none;
  }

  .modal-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
    position:fixed;
    background: white;
    width: 50%;
    height: auto;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
`;
