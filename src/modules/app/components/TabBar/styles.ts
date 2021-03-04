import styled, { css } from 'styled-components';

import backgroundImg from '../../../../assets/back.jpg';

interface ButtonProps {
  selected: boolean;
}

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: var(--lightGrey);

  .tabBar {
    background: url(${backgroundImg});
    background-repeat: no-repeat;
    height: 100%;
    width: 250px;
    border-top-right-radius: 70px;
    border-bottom-right-radius: 70px;

    .icon {
      margin: 30px 60px;
    }

    h3 {
      text-align: center;
      font-size: 25px;
      color: var(--grey);
      text-align: left;
      margin: 0 60px;
    }

    section {
      margin-top: 40px;
    }
  }

  .tabContent {
    flex: 1;
    background-color: var(--lightGrey);
    padding: 65px 50px 0;
  }
`;

export const ButtonOption = styled.button<ButtonProps>`
  background: transparent;
  border: 0;
  display: flex;
  align-items: center;
  margin-top: 25px;
  width: 100%;
  padding: 10px 0;
  margin-left: 10px;

  ${(props) => props.selected && css`
    background: var(--white);
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
  `}

  img {
    margin:0 15px 0;
  }
`;
