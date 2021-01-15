import React from 'react';

import { CourseContainer, CourseImg } from './style';

export const CourseItem = ({ cover }) => {
  return (
    <CourseContainer>
      <CourseImg src={cover} />
    </CourseContainer>
  );
};
