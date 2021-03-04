import React from 'react';
import Description from '../../../../components/Description';

import { Container } from './styles';

const Revenues: React.FC = () => (
  <Container>
    <Description>Você realizou</Description>
    <h2>R$ 10.000,00</h2>
    <Description>serviços esse mês</Description>
  </Container>
);

export default Revenues;
