import React from 'react';

import { CourseItem } from './CoursesItems/index';
import { CourseMainContainer, SectionTitle } from './style';
import defaultImage from '../../assets/static/logoBlack.png';

export const Courses = () => {
  return (
    <CourseMainContainer id="Courses">
      <SectionTitle>Courses</SectionTitle>
      <CourseItem
        cover={defaultImage}
        title="Course1"
        description="description 1"
      />
      <CourseItem
        cover={defaultImage}
        title="Course2"
        description="Description 2"
      />
    </CourseMainContainer>
  );
};
