import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { getMonth, getYear } from 'date-fns';

import TabBar from '../../components/TabBar';
import TextWelcome from '../../components/TextWelcome';

import arrowLeftIcon from '../../assets/arrowLeft.png';
import arrowRightIcon from '../../assets/arrowRight.png';

import { DaysCalendarDTO } from '../../../../dtos/DaysInCalendarDTO';
import listMonths from '../../helpers/months.data';
import { daysOfWeek } from '../../helpers/daysOfWeek.data';
import daysInMonth from '../../../../utils/daysInMonth';

import {
  Container, DivCalendar, DivDaysOfWeek, DivDaysOfMonth, DivDay,
  SelectAppointments,
} from './styles';

const Appointments: React.FC = () => {
  const [month, setMonth] = useState(getMonth(new Date()) + 1);
  const [year, setYear] = useState(getYear(new Date()));
  const [days, setDays] = useState<DaysCalendarDTO[]>();

  useEffect(() => {
    setDays(daysInMonth(month, year));
  }, [month, year]);

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
              <p>{day.day}</p>
            ))}
          </DivDaysOfWeek>

          <DivDaysOfMonth>
            {days?.map((day, index) => (
              <DivDay key={index} thisMonth={day.thisMonth}>
                <p key={index}>{day.day}</p>
              </DivDay>
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
      </Container>
    </TabBar>
  );
};

export default Appointments;
