import React from 'react';

import { CourseItem } from './CoursesItems/index';
import { CourseMainContainer, SectionTitle } from './style';

import Carousel from 'react-elastic-carousel';

export const Courses = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
  ];

  const Covers = {
    algoritmos:
      'https://res.cloudinary.com/dgthnv9ab/image/upload/v1610690179/Screenshot_from_2021-01-15_00-56-01_rtrgiy.png',
    practicoreactjs:
      'https://res.cloudinary.com/dgthnv9ab/image/upload/v1610691010/Screenshot_from_2021-01-15_01-09-55_g7in2h.png',
    desarrolloWeb:
      'https://res.cloudinary.com/dgthnv9ab/image/upload/v1610691131/Screenshot_from_2021-01-15_01-11-56_rqinrg.png',
    frontend:
      'https://res.cloudinary.com/dgthnv9ab/image/upload/v1610691496/Screenshot_from_2021-01-15_01-18-04_zhkzpz.png',
  };

  return (
    <CourseMainContainer>
      <SectionTitle>Courses</SectionTitle>
      <Carousel breakPoints={breakPoints}>
        <CourseItem cover={Covers.algoritmos} />
        <CourseItem cover={Covers.practicoreactjs} />
        <CourseItem cover={Covers.desarrolloWeb} />
        <CourseItem cover={Covers.frontend} />
      </Carousel>
    </CourseMainContainer>
  );
};
