import React from 'react';

import resolvaIcon from '../../../../assets/icon.png';

import { Container } from './styles';

const TabBar: React.FC = ({ children }) => (
  <Container>
    <div className="tabBar">
      <img src={resolvaIcon} alt="Resolva Club" />
      <h3>Painel da consultora resolva</h3>
    </div>
    <div className="tabContent">
      {children}
    </div>
  </Container>
);

export default TabBar;
