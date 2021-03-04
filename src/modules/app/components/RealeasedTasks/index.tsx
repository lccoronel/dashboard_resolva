import React from 'react';
import Description from '../../../../components/Description';

import { Container } from './styles';

const RealeasedTasks: React.FC = () => (
  <Container>
    <Description>Você realizou</Description>
    <h2 className="tasksNumber">1</h2>
    <Description>serviço esse mês</Description>
  </Container>
);

export default RealeasedTasks;
