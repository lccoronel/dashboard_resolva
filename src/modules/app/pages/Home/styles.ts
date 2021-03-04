import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  h2 {
    font-size: 30px;
    font-weight: 400;
    color: var(--textColor);
    line-height: 28px;
  }

  p {
    font-size: 24px;
    font-weight: 400;
    color: var(--textColor);
    line-height: 28px;
    font-family: 'Roboto', sans-serif;
  }

  div {
    display: flex;
    margin-top: 10px;

    .containerPhoto {
      border: 5px solid #fff;
      border-radius: 50%;
      width: 186px;
      height: 186px;

      img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
      }
    }

    .containerName {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-left: 25px;

      .welcome {
        font-size: 22px;
        font-weight: 400;
        color: vat(--textColor);
      }

      .name {
        font-size: 36px;
        color: vat(--textColor);
        font-weight: 500;
      }
    }
  }

  section {
    .styles {
      display: flex;
      flex-direction: column;
      width: 200px;
      background-color: var(--white);
      border-radius: 10px;

      .style {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
          width: 20px;
          height: 20px;
        }

        .title {
          font-size: 13px;
          color: var(--textColor);
          font-weight: 400;
          font-family: "Roboto", sans-serif;
          text-align: center;
        }

        .description {
          font-size: 18px;
          color: var(--textColor);
          font-weight: 400;
          font-family: "Roboto", sans-serif;
          text-align: center;
        }
      }
    }
  }
`;
