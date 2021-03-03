import styled from 'styled-components';
import backgroundImg from '../../assets/back.jpg';

export const Container = styled.div`
  background: url(${backgroundImg}) ;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #FDE3E4;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1200px) {
    & {
      background: #FDE3E4;
    }
  }

  img {
    margin-bottom: 30px;
  }

  .containerWhite {
    background-color: #fff;
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
        color: #fff;
        font-family: 'Roboto', sans-serif;
        border: 0;
        width: 64%;
        margin: 20px auto 0;
        padding: 10px;
        border-radius: 10px;
        font-weight: 500;
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
