import styled from 'styled-components';
import { darken } from 'polished';

import backgroundImg from '../../../../assets/back.jpg';

export const Container = styled.div`
  background: url(${backgroundImg});
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: var(--lightPink);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1200px) {
    & {
      background: var(--lightPink);
    }
  }

  img {
    margin-bottom: 30px;
  }

  .containerWhite {
    background-color: var(--white);
    border-radius: 10px;
    width: 583px;
    height: 474px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h3 {
      text-align: center;
      font-size: 28px;
    }

    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 20px 0 70px;

      button {
        background-color: #333;
        color: var(--white);
        font-family: 'Roboto', sans-serif;
        border: 0;
        width: 64%;
        margin: 20px auto 0;
        padding: 10px;
        border-radius: 10px;
        font-weight: 500;

        &:hover {
          background: ${darken(0.5, '#333')}
        }
      }
    }

    p {
      font-size: 13px;
      font-weight: 300;
      font-family: 'Roboto', sans-serif;
    }

    @media (max-width: 600px) {
      & {
        width: 400px;

        h3 {
          text-align: center;
          font-size: 20px;
        }
      }
    }
  }
`;
