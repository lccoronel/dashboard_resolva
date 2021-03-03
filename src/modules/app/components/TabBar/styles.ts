import styled from 'styled-components';

import backgroundImg from '../../../../assets/back.jpg';

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

    img {
      margin: 30px 60px;
    }

    h3 {
      text-align: center;
      font-size: 25px;
      color: var(--grey);
      text-align: left;
      margin: 0 60px;
    }
  }

  .tabContent {
    flex: 1;
    background-color: var(--lightGrey);
    padding: 65px 50px 0;
  }
`;
