import styled from 'styled-components';
import { Modal } from '@material-ui/core';

export const Container = styled(Modal)`
  display: flex;
  justify-content: center;

  .containerModal {
    width: 721px;
    height: 295px;
    border-radius: 10px;
    background-color: #ffffff;
    border: 1px solid #e2e2e2;
    margin-top: 20%;
    padding: 20px 30px;

    .headerModalClient {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 0.5px solid #999;
      padding-bottom: 15px;

      h2 {
        font-size: 26px;
        color: #5a5a5a;
        font-weight: 300;
      }

      button {
        display: flex;
        align-items: center;
        border: 0;
        background: transparent;

        img {
          margin-left: 10px;
        }
      }
    }

    .infos {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
