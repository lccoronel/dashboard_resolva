import React, { useMemo } from 'react';
import { useSpring, animated } from 'react-spring';

import Description from '../../../../components/Description';
import { Container } from './styles';

interface TasksInDayProps {
  value: number;
}

const TasksInDay: React.FC<TasksInDayProps> = ({ value }) => {
  const { number } = useSpring({
    config: { duration: 500 },
    number: value,
    from: { number: 0 },
  });

  const tasks = useMemo(() => number.interpolate((n: any) => Math.floor(n)), [number]);

  return (
    <Container>
      <p className="titleTask">Tarefas do dia</p>
      <div>
        <Description>Você possui</Description>
        <animated.span>{tasks}</animated.span>
        <Description>serviço hoje!</Description>
      </div>
    </Container>
  );
};

export default TasksInDay;
