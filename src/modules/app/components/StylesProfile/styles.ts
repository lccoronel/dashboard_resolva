import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: var(--white);
  border-radius: 10px;
  padding: 10px 0;
  width: 192px;
  border: 1px solid #e2e2e2;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      margin-bottom: 10px;
    }
  }

  div + div {
    margin-top: 15px;
    border-top: 0.5px solid #999;
    padding-top: 10px;
  }
`;
