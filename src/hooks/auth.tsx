import React, {
  createContext, useCallback, useContext, useState,
} from 'react';

import api from '../services/api';

interface AuthState {
  token: string;
  lastName: string;
  firstName: string;
  isConsultant: boolean;
}

interface CredentialsProps{
  username: string;
  password: string;
}

interface AuthContextProps {
  isColsultant: boolean;
  SignIn(credentials: CredentialsProps): Promise<void>;
  SignOut(): void;
  user: AuthState;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@ResolvaConsultant:token');
    const firstName = localStorage.getItem('@ResolvaConsultant:fisrtName');
    const lastName = localStorage.getItem('@ResolvaConsultant:lastName');
    const isConsultant = localStorage.getItem('@ResolvaConsultant:isConsultant');

    if (token && firstName && lastName && isConsultant) {
      return {
        token, firstName, lastName, isConsultant: JSON.parse(isConsultant),
      };
    }

    return {} as AuthState;
  });

  const SignIn = useCallback(async ({ username, password }: CredentialsProps) => {
    const response = await api.post('/auth/', {
      username,
      password,
    });

    const {
      access, first_name, last_name,
    } = response.data;

    localStorage.setItem('@ResolvaConsultant:token', access);
    localStorage.setItem('@ResolvaConsultant:fisrtName', first_name);
    localStorage.setItem('@ResolvaConsultant:lastName', last_name);

    const responseInfo = await api.get('users/info/', {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });

    const { is_consultant } = responseInfo.data;
    localStorage.setItem('@ResolvaConsultant:isConsultant', JSON.stringify(is_consultant));

    setData({
      token: access,
      firstName: first_name,
      lastName: last_name,
      isConsultant: is_consultant,
    });
  }, []);

  const SignOut = useCallback(() => {
    localStorage.clear();
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{
      SignIn, SignOut, user: data, isColsultant: data.isConsultant,
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
