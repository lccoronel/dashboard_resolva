import homeIcon from '../assets/Home.png';
import calendarIcon from '../assets/Calendario.png';

import { OptionsMenuDTO } from '../../../dtos/OptionsMenu';

export const options: OptionsMenuDTO[] = [
  {
    id: 0,
    icon: homeIcon,
    name: 'HOME',
    route: '/home',
    showing: true,
  },
  {
    id: 1,
    icon: calendarIcon,
    name: 'AGENDAMENTO',
    route: '/appointments',
    showing: false,
  },
];
