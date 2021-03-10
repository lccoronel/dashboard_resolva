import React, { HTMLAttributes } from 'react';

import { Container } from './styles';

interface InfoWithContentAndLabelProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  content: string;
}

const InfoWithContentAndLabel: React.FC<InfoWithContentAndLabelProps> = ({
  label,
  content,
  ...rest
}) => (
  <Container {...rest}>
    <p className="label">{label}</p>
    <p className="content">{content}</p>
  </Container>
);

export default InfoWithContentAndLabel;
