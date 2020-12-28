import React from 'react';

import { CardContainer, CardTitle, CardDescription, CardLink } from './style';

export const ProjectsItem = ({ title, description, link, linkName }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardLink href={link}>{linkName}</CardLink>
    </CardContainer>
  );
};
