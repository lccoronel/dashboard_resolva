import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import resolvaIcon from '../../../../assets/icon.png';
import { options } from '../../helpers/options.data';
import { OptionsMenuDTO } from '../../../../dtos/OptionsMenu';

import { Container, ButtonOption } from './styles';
import { useAuth } from '../../../../hooks/auth';

const TabBar: React.FC = ({ children }) => {
  const { SignOut } = useAuth();
  const [optionsMenu, setOptionsMenu] = useState<OptionsMenuDTO[]>(options);
  const { push } = useHistory();

  const handleNavigateOption = useCallback((route: string) => {
    if (route === 'left') {
      SignOut();
      return;
    }

    const optionsMenuWithOtionSelected = optionsMenu.map((option) => {
      route === option.route
        ? option.showing = true
        : option.showing = false;

      return option;
    });

    setOptionsMenu(optionsMenuWithOtionSelected);
    push(route);
  }, [push, optionsMenu, SignOut]);

  return (
    <Container>
      <div className="tabBar">
        <img className="icon" src={resolvaIcon} alt="Resolva Club" />
        <h3>Painel da consultora resolva</h3>

        <section>
          {optionsMenu.map((option) => (
            <ButtonOption
              key={option.id}
              type="button"
              onClick={() => handleNavigateOption(option.route)}
              selected={option.showing}
            >
              <img key={option.id} src={option.icon} alt={option.name} />
              {option.name}
            </ButtonOption>
          ))}
        </section>
      </div>

      <div className="tabContent">
        {children}
      </div>
    </Container>
  );
};

export default TabBar;
