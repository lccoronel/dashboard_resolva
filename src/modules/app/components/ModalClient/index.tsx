import React, { forwardRef, useCallback, useState } from 'react';

import { Container } from './styles';

export interface ModalClientProps {
  handleShowModal: () => void;
}

const ModalClient: React.ForwardRefRenderFunction<ModalClientProps> = (props, ref) => {
  const [show, setShow] = useState(false);

  const handleShowModal = useCallback(() => {
    setShow((status) => !status);
  }, []);

  return (
    <Container open={show} onClose={handleShowModal}>
      <div className="containerModal" />
    </Container>
  );
};

export default forwardRef(ModalClient);
