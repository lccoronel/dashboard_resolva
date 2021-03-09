import React, { useMemo } from 'react';
import { useSpring, animated } from 'react-spring';

import Description from '../../../../components/Description';
import { Container } from './styles';

interface ReleasedTasksProps {
  value: number;
}

const ReleasedTasks: React.FC<ReleasedTasksProps> = ({ value }) => {
  const { number } = useSpring({
    config: { duration: 500 },
    number: value,
    from: { number: 0 },
  });

  const tasks = useMemo(() => number.interpolate((n: any) => Math.floor(n)), [number]);

  return (
    <Container>
      <Description>Você realizou</Description>
      <animated.span>{tasks}</animated.span>
      <Description>serviço esse mês</Description>
    </Container>
  );
};

export default ReleasedTasks;
