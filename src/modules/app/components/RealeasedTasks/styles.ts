import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: var(--white);
  border-radius: 10px;
  width: 192px;
  height: 148px;
  border: 1px solid #e2e2e2;

  .tasksNumber {
    font-size: 50px;
  }
`;
