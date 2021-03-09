import styled from 'styled-components';

export const Container = styled.div`
  .headerSchedule {
    display: flex;
    align-items: center;
    margin-top: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid #ccc;

    img {
      width: 25px;
      height: 20px;
    }

    p {
      font-size: 20px;
      color: #5a5a5a;
      font-weight: 300;
      margin-left: 10px;
    }

    .doneText {
      font-size: 13px;
      color: #676767;
      font-weight: 400;
      text-align: right;
      margin-left: auto;
    }

    .doneImg {
      width: 25px;
      height: 25px;
      margin-left: 10px;
    }
  }


  section {
    display: flex;

    div + div {
      margin-left: 30%;
    }
  }

  .label {
    font-size: 12px;
    color: #676767;
    font-weight: 400;
    margin-top: 15px;
  }

  .name {
    font-size: 15px;
    color: #333333;
    font-weight: 400;
  }

  button {
    margin-top: 12px;
    width: 100%;
    height: 42px;
    border: 0;
    border-radius: 10px;
    background-color: var(--pink);
    font-size: 18px;
    color: #333333;
    font-weight: 500;

    & + button {
      background-color: var(--grey);
      color: var(--white);
    }

    img {
      margin-right: 10px;
    }
  }
`;
