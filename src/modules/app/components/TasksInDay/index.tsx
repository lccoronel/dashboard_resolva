import React from 'react';
import Description from '../../../../components/Description';

import { Container } from './styles';

const TasksInDay: React.FC = () => (
  <Container>
    <p className="titleTask">Tarefas do dia</p>
    <div>
      <Description>Você possui</Description>
      <h2>1</h2>
      <Description>serviço hoje!</Description>
    </div>
  </Container>
);

export default TasksInDay;
