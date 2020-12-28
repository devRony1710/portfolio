import React from 'react';

import {
  CourseContainer,
  CourseImg,
  CourseTitle,
  CourseDescription,
  ContainerDescription,
} from './style';

export const CourseItem = ({ cover, title, description }) => {
  return (
    <CourseContainer>
      <CourseImg src={cover} />
      <ContainerDescription>
        <CourseTitle>{title}</CourseTitle>
        <CourseDescription>{description}</CourseDescription>
      </ContainerDescription>
    </CourseContainer>
  );
};
