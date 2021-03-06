import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: var(--white);
  border-radius: 10px;
  width: 236px;
  margin-left: 30px;
  height: 148px;
  border: 1px solid #e2e2e2;

  @media(max-width: 600px) {
    & {
      margin-left: 0px;
      margin-top: 20px;
    }
  }

  h2 {
    font-size: 32px;
  }
`;
