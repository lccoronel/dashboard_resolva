import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import logoIcon from '../../../../assets/icon.png';
import { Container } from './styles';
import { useAuth } from '../../../../hooks/auth';

interface FormProps {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { SignIn } = useAuth();

  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async ({ email, password }: FormProps) => {
    SignIn({ username: email, password });
  }, [SignIn]);

  return (
    <Container>
      <img src={logoIcon} alt="Icone" />
      <div className="containerWhite">
        <h3>Painel da consultora Resolva</h3>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Input name="email" placeholder="E-mail" type="email" defaultValue="self.gustavocorrea@gmail.com" />
          <Input name="password" placeholder="Senha" type="password" defaultValue="Chv5taffvs" />
          <button type="submit">Entrar</button>
        </Form>
        <p>© 2021 Resolva - Todos os direitos reservados</p>
      </div>
    </Container>
  );
};

export default Login;
