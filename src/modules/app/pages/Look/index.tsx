import React from 'react';

import TabBar from '../../components/TabBar';
import TextWelcome from '../../components/TextWelcome';
import arrowLeftIcon from '../../assets/arrowLeft.png';

import { Container } from './styles';

const Look: React.FC = () => (
  <TabBar>
    <Container>
      <TextWelcome />

      <div className="headerLook">
        <p className="textLook">Looks</p>

        <div className="containerButton">
          <button type="button">
            <img src={arrowLeftIcon} alt="Flecha para Esquerda" />
          </button>
          <p>Voltar</p>
        </div>
      </div>

      <section className="contentLook">
        <div className="headerContetnt">
          <h2>O look montado</h2>

          <section className="containerButtons">
            <button type="button">
              Editar
            </button>
            <button type="button">
              Apagar
            </button>
          </section>
        </div>
      </section>
      <p className="textHelp">
        Para alterar uma categoria ou um nome clique em “Selecionar”, depois clique
        no look montado em seguida no botão “Editar” e altere o texto como desejar.
        Para deletar um look completo, clique em “Selecionar”, depois  em “Apagar”
      </p>
    </Container>
  </TabBar>
);

export default Look;
