import styled from 'styled-components';
import Select from 'react-select';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .content {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 40px;

    .left {
      width: 60%;

      .description-calendar {
        margin-top: 15px;
        margin-left: 15px;
      }

      .select {
        display: flex;
        align-items: center;
        margin-top: 50px;

        button {
          margin-left: 20px;
          width: 173px;
          height: 40px;
          border-radius: 10px;
          background-color: #5a5a5a;
          border: 0;

          font-size: 18px;
          color: var(--white);
          font-weight: 500;
          text-align: center;

          &:hover {
            background-color: ${darken(0.5, '#5a5a5a')};
          }
        }
      }

      .checkbox {
        display: flex;
        align-items: center;
        margin-top: 20px;

        .checbox-text {
          margin-left: 10px;
          font-size: 13px;
          color: #333333;
          font-weight: 400;
        }
      }
    }

    .right {
      width: 354px;
      height: 742px;
      border-radius: 10px;
      background-color: var(--white);
      border: 1px solid #e2e2e2;
      margin-left: 30px;
      padding: 15px;

      h2 {
        font-size: 26px;
        color: #5a5a5a;
        font-weight: 300;
      }
    }

    @media(max-width: 600px) {
      & {
        display: flex;
        flex-direction: column;

        .left {
          width: 100%;
        }

        .right {
          margin: 30px 0;
          width: 90%;
        }
      }
    }
  }
`;

export const DivCalendar = styled.div`
  background-color: var(--white);
  width: 100%;
  border-radius: 10px;
  border: 1px solid var(--borderColor);

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;

    h2 {
      font-size: 26px;
      color: #5a5a5a;
      font-weight: 300;
    }

    button {
      width: 40px;
      height: 33px;
      border-radius: 5px;
      background-color: var(--white);
      border: 1px solid var(--borderColor);

      &:hover {
        background-color: var(--lightGrey);
      }

      & + button {
        margin-left: 10px;
      }
    }
  }

  @media(max-width: 1000px) {
    & {
      width: 85%;
    }
  }

  @media(max-width: 600px) {
    & {
      width: 100%;
    }
  }
`;

export const DivDaysOfWeek = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;

  p {
    font-size: 14px;
    color: #9d9d9d;
    font-weight: 400;
  }
`;

export const DivDaysOfMonth = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 14.31%);
  margin-top: 10px;
`;

export const SelectAppointments = styled(Select)`
  width: 80%;
  border-radius: 10px;
  background-color: var(--white);

  @media(max-width: 600px) {
    width: 65%;
  }
`;
