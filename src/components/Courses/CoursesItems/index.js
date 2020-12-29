import React from 'react';

import {
  CourseContainer,
  CourseImg,
  CourseTitle,
  CourseDescription,
  ContainerDescription,
  CourseLink,
} from './style';

export const CourseItem = ({ cover, title, description, link }) => {
  return (
    <CourseContainer>
      <CourseImg src={cover} />
      <ContainerDescription>
        <CourseTitle>{title}</CourseTitle>
        <CourseDescription>{description}</CourseDescription>
        <CourseLink href={link}>View Certified</CourseLink>
      </ContainerDescription>
    </CourseContainer>
  );
};
