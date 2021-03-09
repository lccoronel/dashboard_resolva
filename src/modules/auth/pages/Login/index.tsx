import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

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

  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(async ({ email, password }: FormProps) => {
    try {
      setLoading(true);
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail valido'),
        password: Yup.string().required('Senha obrigatoria'),
      });

      await schema.validate({ email, password }, {
        abortEarly: false,
      });

      await SignIn({ username: email, password });
      toast.success('Bem vinda!');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        err.message === '2 errors occurred'
          ? toast.error('Preencha as credenciais')
          : toast.error(err.message);
        return;
      }

      toast.error('Não foi possivel fazer login');
    } finally {
      setLoading(false);
    }
  }, [SignIn]);

  return (
    <Container>
      <img src={logoIcon} alt="Icone" />
      <div className="containerWhite">
        <h3>Painel da consultora Resolva</h3>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Input name="email" placeholder="E-mail" type="email" defaultValue="self.gustavocorrea@gmail.com" />
          <Input name="password" placeholder="Senha" type="password" defaultValue="Chv5taffvs" />
          <button type="submit">{loading ? 'Caregando...' : 'Entrar'}</button>
        </Form>
        <p>© 2021 Resolva - Todos os direitos reservados</p>
      </div>
    </Container>
  );
};

export default Login;
