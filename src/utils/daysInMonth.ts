import { getDay } from 'date-fns';

import { DaysCalendarDTO } from '../dtos/DaysInCalendarDTO';

function daysInMonth(month: number, year: number): DaysCalendarDTO[] {
  const lastDayThisMonth = new Date(year, month, 0).getDate();
  const startDayOfWeek = getDay(new Date(year, month - 1, 1));
  const days = [];
  const calendar = [];

  let lastDayPreviousMonth = new Date(year, month - 1, 0).getDate();
  days.push(lastDayPreviousMonth);
  for (let i = 0; i < startDayOfWeek; i++) {
    lastDayPreviousMonth -= 1;
    days.push(lastDayPreviousMonth);
  }

  days.sort();

  days.map((day) => {
    calendar.push({ day: String(day), appointment: false, thisMonth: false });
  });

  for (let i = 1; i <= lastDayThisMonth; i++) {
    days.push(i);
    calendar.push({
      day: String(i).padStart(2, '0'),
      appointment: false,
      thisMonth: true,
    });
  }

  const daysToComplete = days.length > 35 ? 42 : 35;
  const diferenceOfDaysToCompleteCalendar = daysToComplete - days.length;
  for (let i = 1; i <= diferenceOfDaysToCompleteCalendar; i++) {
    days.push(i);
    calendar.push({
      day: String(i).padStart(2, '0'),
      appointment: false,
      thisMonth: false,
    });
  }

  return calendar;
}

export default daysInMonth;
