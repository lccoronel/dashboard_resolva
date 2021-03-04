import React from 'react';

import TabBar from '../../components/TabBar';
import StylesProfile from '../../components/StylesProfile';
import TasksInDay from '../../components/TasksInDay';
import RealeasedTasks from '../../components/RealeasedTasks';
import Revenues from '../../components/Revenues';

import photoimg from '../../assets/Foto.png';
import { useAuth } from '../../../../hooks/auth';

import { Container, DivProfile } from './styles';

const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <TabBar>
      <Container>
        <h2>Fique sempre atenta ao seus agendamentos.</h2>
        <p className="subTitle">Vamos evitar cancelamentos!</p>

        <DivProfile>
          <img src={photoimg} alt="perfil" />

          <div className="containerName">
            <p className="welcome">Bem vinda,</p>
            <h3 className="name">{`${user.firstName} ${user.lastName}`}</h3>
          </div>
        </DivProfile>

        <section>
          <StylesProfile />
          <TasksInDay />
        </section>

        <section>
          <RealeasedTasks />
          <Revenues />
        </section>
      </Container>
    </TabBar>
  );
};

export default Home;
