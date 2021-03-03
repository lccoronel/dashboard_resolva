import React, { useCallback } from 'react';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import logoIcon from '../../assets/icon.png';
import { Container } from './styles';

const Login: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSubmit = useCallback(() => {
    // console.log(data);
  }, []);

  return (
    <Container>
      <img src={logoIcon} alt="Icone" />
      <div className="containerWhite">
        <h3>Painel da consultora Resolva</h3>
        <Form onSubmit={handleSubmit}>
          <Input name="email" placeholder="Nome" />
          <Input name="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
        </Form>
        <p>© 2021 Resolva - Todos os direitos reservados</p>
      </div>
    </Container>
  );
};

export default Login;
