import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border-radius: 10px;
  width: 236px;
  margin-left: 30px;
  border: 1px solid #e2e2e2;

  @media(max-width: 600px) {
    & {
      margin-left: 0px;
      margin-top: 20px;
    }
  }

  .titleTask {
    font-size: 17px;
    line-height: 17px;
    color: var(--textColor);
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    text-align: center;
    background-color: #ecd6ea;
    width: 236px;
    height: 60px;
    padding-top: 15px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  div {
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 50px;
    }
  }
`;
