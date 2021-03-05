import styled from 'styled-components';

export const Container = styled.div`
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

  @media(max-width: 1000px) {
    & {
      h2 {
        font-size: 25px;
      }

      .subTitle {
        font-size: 19px;
      }
    }
  }
`;
