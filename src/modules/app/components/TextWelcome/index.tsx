import React from 'react';

import { Container } from './styles';

const TextWelcome: React.FC = () => (
  <Container>
    <h2>Fique sempre atenta ao seus agendamentos.</h2>
    <p className="subTitle">Vamos evitar cancelamentos!</p>
  </Container>
);

export default TextWelcome;
