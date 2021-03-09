import React from 'react';

import TabBar from '../../components/TabBar';
import StylesProfile from '../../components/StylesProfile';
import TasksInDay from '../../components/TasksInDay';
import ReleasedTasks from '../../components/RealeasedTasks';
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
            <h3 className="name">{`${user.user.firstName} ${user.user.lastName}`}</h3>
          </div>
        </DivProfile>

        <section className="content-home">
          <StylesProfile
            colorChart={user.user.colorChart}
            primaryStyle={user.user.primaryStyle}
          />
          <TasksInDay value={10} />
        </section>

        <section className="content-home">
          <ReleasedTasks value={6} />
          <Revenues />
        </section>
      </Container>
    </TabBar>
  );
};

export default Home;
