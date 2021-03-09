import styled, { css } from 'styled-components';

interface ButtonDayProps {
  thisMonth: boolean;
}

export const Container = styled.div<ButtonDayProps>`
  border: 0.5px solid #eee;
  padding: 10px;
  height: 60px;

  ${(props) => !props.thisMonth && css`
    background-color: var(--lightGrey);
  `}

  p {
    font-size: 14px;
    color: #dcdcdc;
    font-weight: 400;
    text-align: right;

    ${(props) => props.thisMonth && css`
      color: var(--grey);
    `}
  }
`;
