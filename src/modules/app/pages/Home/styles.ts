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

  .subTitle {
    font-size: 24px;
    font-weight: 400;
    color: var(--textColor);
    line-height: 28px;
    font-family: 'Roboto', sans-serif;
  }

  section {
    display: flex;
    margin-top: 30px;
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
      margin-top: 10px;
    }
  }
`;
