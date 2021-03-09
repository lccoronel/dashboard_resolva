import React from 'react';

import clotheIcon from '../../assets/Roupa.png';
import { DaysCalendarDTO } from '../../../../dtos/DaysInCalendarDTO';
import { Container } from './styles';

interface DayInCalendarProps {
  day: DaysCalendarDTO;
}

const DayInCalendar: React.FC<DayInCalendarProps> = ({ day }) => (
  <Container
    thisMonth={day.thisMonth}
  >
    <p>{day.day}</p>
    {day.appointment && day.thisMonth && (
      <div>
        <img src={clotheIcon} alt="Roupa" />
      </div>
    )}
  </Container>
);

export default DayInCalendar;
