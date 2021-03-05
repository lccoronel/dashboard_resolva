import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .content-home {
    display: flex;
    margin-top: 30px;

    @media(max-width: 600px) {
      & {
        flex-direction: column;
      }
    }
  }
`;

export const DivProfile = styled.section`
  display: flex;
  margin-top: 10px;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
    border: 5px solid var(--white);

    @media(max-width: 600px) {
      width: 126px;
      height: 126px;
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

      @media(max-width: 600px) {
        font-size: 18px;
      }
    }

    .name {
      font-size: 36px;
      color: vat(--textColor);
      font-weight: 500;
      margin-top: 10px;

      @media(max-width: 600px) {
        font-size: 26px;
        margin-top: 0;
      }
    }
  }
`;
