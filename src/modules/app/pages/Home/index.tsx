import React from 'react';

import TabBar from '../../components/TabBar';
import photoimg from '../../assets/Foto.png';

import { Container } from './styles';

const Home: React.FC = () => (
  <TabBar>
    <Container>
      <h2>Fique sempre atenta ao seus agendamentos.</h2>
      <p>Vamos evitar cancelamentos!</p>

      <div>
        <div className="containerPhoto">
          <img src={photoimg} alt="perfil" />
        </div>

        <div className="containerName">
          <p className="welcome">Bem vinda,</p>
          <h3 className="name">Fe veras</h3>
        </div>
      </div>
    </Container>
  </TabBar>
);

export default Home;
