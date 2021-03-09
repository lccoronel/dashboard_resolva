import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { getMonth, getYear } from 'date-fns';

import TabBar from '../../components/TabBar';
import TextWelcome from '../../components/TextWelcome';
import DayInCalendar from '../../components/DayInCalendar';
import Scheduling from '../../components/Scheduling';

import arrowLeftIcon from '../../assets/arrowLeft.png';
import arrowRightIcon from '../../assets/arrowRight.png';

import daysInMonth from '../../../../utils/daysInMonth';
import listMonths from '../../helpers/months.data';
import { daysOfWeek } from '../../helpers/daysOfWeek.data';
import { DaysCalendarDTO } from '../../../../dtos/DaysInCalendarDTO';
import { microServiceApi } from '../../../../services/api';
import { useAuth } from '../../../../hooks/auth';

import {
  Container, DivCalendar, DivDaysOfWeek, DivDaysOfMonth, SelectAppointments,
} from './styles';

const Appointments: React.FC = () => {
  const { user } = useAuth();
  const [month, setMonth] = useState(getMonth(new Date()) + 1);
  const [year, setYear] = useState(getYear(new Date()));
  const [days, setDays] = useState<DaysCalendarDTO[]>(daysInMonth(month, year));
  const [done, setDone] = useState(true);
  // const [consulteesId, setConsulteesId] = useState([]);

  useEffect(() => {
    const lastDayThisMonth = new Date(year, month, 0).getDate();
    microServiceApi.get(`/v1/profiles/${user.user.id}/consultant-schedulings`, {
      headers: { Authorization: `JWT ${user.token}` },
      params: {
        start_gte: `${year}-${month}-01T00:00:00-03:00`,
        start_lte: `${year}-${month}-${lastDayThisMonth}T23:59:00-03:00`,
        done: done === false ? done : null,
      },
    }).then((response) => {
      const markedDays = response.data.map((appointment: any) => {
        const day = appointment.start.substring(8, 10);
        return day;
      });

      const calendarDays = daysInMonth(month, year);

      const daysWithAppointments = calendarDays.map((day) => {
        day.appointment = markedDays.includes(day.day);
        return day;
      });

      setDays(daysWithAppointments);

      response.data.map((appointment: any) => appointment.consulteeId);
    });
  }, [month, year, user, done]);

  const handleChangeMonth = useCallback((action: 'up' | 'down') => {
    switch (action) {
      case 'up':
        if (month === 12) {
          setMonth(1);
          setYear((value) => value + 1);
          return;
        }
        setMonth((value) => value + 1);
        break;
      case 'down':
        if (month === 1) {
          setMonth(12);
          setYear((value) => value - 1);
          return;
        }
        setMonth((value) => value - 1);
        break;
      default:
        setMonth((value) => value);
    }
  }, [month]);

  const monthName = useMemo(() => {
    const formattedMonth = listMonths.filter((value) => {
      if (month === value.id) return value.month;
    });

    return formattedMonth[0].month;
  }, [month]);

  return (
    <TabBar>
      <Container>
        <TextWelcome />

        <section className="content">
          <div className="left">
            <DivCalendar>
              <section>
                <h2>{`${monthName}/${year}`}</h2>

                <div>
                  <button type="button" onClick={() => handleChangeMonth('down')}>
                    <img src={arrowLeftIcon} alt="Flecha para Esquerda" />
                  </button>
                  <button type="button" onClick={() => handleChangeMonth('up')}>
                    <img src={arrowRightIcon} alt="Flecha para Direita" />
                  </button>
                </div>
              </section>

              <DivDaysOfWeek>
                {daysOfWeek.map((day) => (
                  <p key={day.id}>{day.day}</p>
                ))}
              </DivDaysOfWeek>

              <DivDaysOfMonth>
                {days?.map((day, index) => (
                  <DayInCalendar
                    key={index}
                    day={day}
                  />
                ))}
              </DivDaysOfMonth>
            </DivCalendar>

            <p className="description-calendar">Selecione uma data para ver os agendamentos</p>

            <section className="select">
              <SelectAppointments />

              <button type="button">
                Buscar
              </button>
            </section>

            <section className="checkbox">
              <input type="checkbox" onClick={() => setDone((check) => !check)} />
              <p className="checbox-text">Apenas agendamentos pendentes</p>
            </section>
          </div>

          <div className="right">
            <h2>Agendamentos</h2>
            <Scheduling />
          </div>
        </section>
      </Container>
    </TabBar>
  );
};

export default Appointments;
