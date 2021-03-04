import React from 'react';

import TabBar from '../../components/TabBar';
import photoimg from '../../assets/Foto.png';
import chartIcon from '../../assets/chart.png';
import styleIcon from '../../assets/Estilo.png';

import { Container } from './styles';
import { useAuth } from '../../../../hooks/auth';

const Home: React.FC = () => {
  const { user } = useAuth();

  return (
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
            <h3 className="name">{`${user.firstName}${user.lastName}`}</h3>
          </div>
        </div>

        <section>
          <div className="styles">
            <div className="style">
              <img src={chartIcon} alt="Cartela de cores" />
              <p className="title">Cartela de cor</p>
              <p className="description">Primavera clara</p>
            </div>
            <div className="style">
              <img src={styleIcon} alt="Estilo predominante" />
              <p className="title">Cartela de cor</p>
              <p className="description">Predominante</p>
            </div>
          </div>
        </section>
      </Container>
    </TabBar>
  );
};

export default Home;
