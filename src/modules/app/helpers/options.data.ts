import homeIcon from '../assets/Home.png';
import calendarIcon from '../assets/Calendario.png';
import leftIcon from '../assets/Sair.png';

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
  {
    id: 2,
    icon: leftIcon,
    name: 'LOGOUT',
    route: 'left',
    showing: false,
  },
];
