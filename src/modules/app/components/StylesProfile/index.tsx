import React from 'react';

import Description from '../../../../components/Description';
import chartIcon from '../../assets/chart.png';
import styleIcon from '../../assets/Estilo.png';

import { Container } from './styles';

interface StylesProfileProps {
  colorChart: {
    season: string;
    tone: string;
  },
  primaryStyle: string | null;
}

const StylesProfile: React.FC<StylesProfileProps> = ({ colorChart, primaryStyle }) => (
  <Container>
    <div className="style" style={{ borderBottomWidth: 2, borderBottomColor: '#333' }}>
      <img src={chartIcon} alt="Cartela de cores" />
      <Description>Cartela de cor</Description>
      <p className="description">{`${colorChart.season} ${colorChart.tone}`}</p>
    </div>
    <div className="style">
      <img src={styleIcon} alt="Estilo predominante" />
      <Description>Estilo predominante</Description>
      <p className="description">{primaryStyle || 'Sem Estilo'}</p>
    </div>
  </Container>
);

export default StylesProfile;
