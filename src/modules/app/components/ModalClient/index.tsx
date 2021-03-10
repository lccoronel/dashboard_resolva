import React, {
  forwardRef, useCallback, useImperativeHandle, useState,
} from 'react';

import leftIcon from '../../assets/sairModal.png';
import InfoWithContentAndLabel from '../InfoWithContentAndLabel';
import { Container } from './styles';

export interface ModalClientProps {
  handleShowModal: () => void;
}

const ModalClient: React.ForwardRefRenderFunction<ModalClientProps> = (props, ref) => {
  const [show, setShow] = useState(false);

  const handleShowModal = useCallback(() => {
    setShow((status) => !status);
  }, []);

  // eslint-disable-next-line arrow-body-style
  useImperativeHandle(ref, () => {
    return {
      handleShowModal,
    };
  });

  return (
    <Container open={show} onClose={handleShowModal}>
      <div className="containerModal">
        <section className="headerModalClient">
          <h2>Paula</h2>

          <button type="button" onClick={handleShowModal}>
            Sair
            <img src={leftIcon} alt="sair" />
          </button>
        </section>

        <div className="infos">
          <InfoWithContentAndLabel label="Telefone" content="11 9000-0000" />
          <InfoWithContentAndLabel label="Estilo" content="Romantico" />
          <InfoWithContentAndLabel label="Cartela de Cor" content="Verao suave" />
          <InfoWithContentAndLabel label="Biotipo" content="Retangulo Invertido" />
          <InfoWithContentAndLabel label="Plano" content="Assinatura regular do app da resolva" />
        </div>
        <InfoWithContentAndLabel label="Descrição" content="Sem observação" style={{ marginTop: 30 }} />
      </div>
    </Container>
  );
};

export default forwardRef(ModalClient);
