import React, {
  createContext, useCallback, useContext, useState,
} from 'react';

import { ConsultantDTO } from '../dtos/ConsultantDTO';
import api from '../services/api';

interface CredentialsProps{
  username: string;
  password: string;
}

interface AuthContextProps {
  SignIn(credentials: CredentialsProps): Promise<void>;
  SignOut(): void;
  user: ConsultantDTO;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<ConsultantDTO>(() => {
    const token = localStorage.getItem('@ResolvaConsultant:token');
    const user = localStorage.getItem('@ResolvaConsultant:user');

    if (token && user) {
      return {
        token, user: JSON.parse(user),
      };
    }

    return {} as ConsultantDTO;
  });

  const SignIn = useCallback(async ({ username, password }: CredentialsProps) => {
    const response = await api.post('/auth/', { username, password });
    const { access, first_name, last_name } = response.data;

    const responseInfo = await api.get('users/info/', {
      headers: { Authorization: `Bearer ${access}` },
    });
    const {
      id, is_consultant, color_chart, primary_style, consultees,
    } = responseInfo.data;
    const user = {
      id,
      firstName: first_name,
      lastName: last_name,
      isConsultant: is_consultant,
      colorChart: color_chart,
      primaryStyle: primary_style,
      clients: consultees,
    };

    localStorage.setItem('@ResolvaConsultant:token', access);
    localStorage.setItem('@ResolvaConsultant:user', JSON.stringify(user));

    setData({ token: access, user });
  }, []);

  const SignOut = useCallback(() => {
    localStorage.clear();
    setData({} as ConsultantDTO);
  }, []);

  return (
    <AuthContext.Provider value={{
      SignIn, SignOut, user: data,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}

export { useAuth, AuthProvider };
