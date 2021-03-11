import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .headerLook {
    width: 80%;
    height: 40px;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .textLook {
      font-size: 22px;
      color: #404040;
      font-weight: 400;
    }

    .containerButton {
      display: flex;
      align-items: center;

      button {
        width: 40px;
        height: 33px;
        border-radius: 5px;
        background-color: var(--white);
        border: 1px solid var(--borderColor);
        font-size: 15px;
        color: #404040;
        font-weight: 400;

        &:hover {
          background-color: var(--lightGrey);
        }

        & + button {
          margin-left: 10px;
        }
      }

      p {
        margin-left: 10px;
        font-size: 15px;
        color: #404040;
        font-weight: 400;
      }
    }
  }

  .contentLook {
    width: 1105px;
    height: 642px;
    border-radius: 10px;
    background-color: var(--white);
    border: 1px solid #e2e2e2;
    margin: 15px 0;
    padding: 15px;

    .headerContetnt {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      padding-bottom: 15px;

      h2 {
        font-size: 26px;
        color: #5a5a5a;
        font-weight: 300;
      }

      .containerButtons {
        button {
          background: var(--grey);
          color: var(--white);
          border: 0;
          padding: 7px 30px;
          font-size: 16px;
          color: var(--white);
          font-weight: 500;
          text-align: center;
          border-radius: 10px;

          & + button {
            margin-left: 10px;
          }
        }
      }
    }
  }

  .textHelp {
    width: 80%;
    font-size: 15px;
    color: #333333;
    font-weight: 400;
  }
`;
