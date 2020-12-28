import React from 'react';

import { CardContainer, CardTitle, CardDescription, CardLink } from './style';

export const ProjectsItem = ({ title, description, link }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardLink href={link}>View Project</CardLink>
    </CardContainer>
  );
};
