import React from 'react';

import clotheIcon from '../../assets/Roupa.png';
import doneIcon from '../../assets/Concluido.png';
import bookIcon from '../../assets/Book.png';
import { Container } from './styles';

const scheduling: React.FC = () => (
  <Container>
    <section className="headerSchedule">
      <img src={clotheIcon} alt="Roupa" />

      <p>25/03 - 09h30</p>

      <p className="doneText">Concluido</p>
      <img className="doneImg" src={doneIcon} alt="Concluido" />
    </section>

    <section>
      <div>
        <p className="label">Cliente</p>
        <p className="name">Paula</p>
      </div>
      <div>
        <p className="label">E-mail</p>
        <p className="name">paula@gmail.com</p>
      </div>
    </section>

    <p className="label">Serviço</p>
    <p className="name">Montagem de Looks no App - 7 Looks</p>

    <p className="label">Descrição</p>
    <p className="name">Sem observaçōes</p>

    <button type="button">
      <img src={bookIcon} alt="Livro" />
      Veja meu perfil completo
    </button>

    <button type="button">
      Criar looks
    </button>
  </Container>
);

export default scheduling;
