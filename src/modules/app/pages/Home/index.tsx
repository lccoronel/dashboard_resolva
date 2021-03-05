import React from 'react';

import TabBar from '../../components/TabBar';
import StylesProfile from '../../components/StylesProfile';
import TasksInDay from '../../components/TasksInDay';
import RealeasedTasks from '../../components/RealeasedTasks';
import Revenues from '../../components/Revenues';
import TextWelcome from '../../components/TextWelcome';

import photoimg from '../../assets/Foto.png';
import { useAuth } from '../../../../hooks/auth';

import { Container, DivProfile } from './styles';

const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <TabBar>
      <Container>
        <TextWelcome />

        <DivProfile>
          <img src={photoimg} alt="perfil" />

          <div className="containerName">
            <p className="welcome">Bem vinda,</p>
            <h3 className="name">{`${user.firstName} ${user.lastName}`}</h3>
          </div>
        </DivProfile>

        <section className="content-home">
          <StylesProfile />
          <TasksInDay />
        </section>

        <section className="content-home">
          <RealeasedTasks />
          <Revenues />
        </section>
      </Container>
    </TabBar>
  );
};

export default Home;
