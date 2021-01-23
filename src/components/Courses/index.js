import React from 'react';

import { CourseItem } from './CoursesItems/index';
import { CourseMainContainer, SectionTitle } from './style';

import Carousel from 'react-elastic-carousel';

export const Courses = () => {
  const breakPoints = [
    {
      width: 1,
      itemsToShow: 1,
      transitionMs: 2000,
    },
    {
      width: 550,
      itemsToShow: 1,
      itemsToScroll: 1,
      transitionMs: 2000,
    },
    {
      width: 768,
      itemsToShow: 1,
      transitionMs: 2000,
    },
    {
      width: 1200,
      itemsToShow: 1,
      transitionMs: 2000,
    },
  ];

  const Covers = {
    algoritmos:
      'https://res.cloudinary.com/dgthnv9ab/image/upload/v1610690179/Screenshot_from_2021-01-15_00-56-01_rtrgiy.png',
    programacionEstruc:
      'https://res.cloudinary.com/dgthnv9ab/image/upload/v1610772857/Screenshot_from_2021-01-15_23-51-28_rylufj.png',
    terminal:
      'https://res.cloudinary.com/dgthnv9ab/image/upload/v1610772857/Screenshot_from_2021-01-15_23-53-24_dclxir.png',
    git:
      'https://res.cloudinary.com/dgthnv9ab/image/upload/v1610772856/Screenshot_from_2021-01-15_23-50-32_ynlf4e.png',
    practicoreactjs:
      'https://res.cloudinary.com/dgthnv9ab/image/upload/v1610691010/Screenshot_from_2021-01-15_01-09-55_g7in2h.png',
    desarrolloWeb:
      'https://res.cloudinary.com/dgthnv9ab/image/upload/v1610691131/Screenshot_from_2021-01-15_01-11-56_rqinrg.png',
    frontend:
      'https://res.cloudinary.com/dgthnv9ab/image/upload/v1610691496/Screenshot_from_2021-01-15_01-18-04_zhkzpz.png',
    fundamentosJs:
      'https://res.cloudinary.com/dgthnv9ab/image/upload/v1610772856/Screenshot_from_2021-01-15_23-50-00_zpr1nk.png',
    profesionalJs:
      'https://res.cloudinary.com/dgthnv9ab/image/upload/v1610772856/Screenshot_from_2021-01-15_23-51-05_cqmrjm.png',
    reactJs:
      'https://res.cloudinary.com/dgthnv9ab/image/upload/v1610772856/Screenshot_from_2021-01-15_23-51-53_wrobi0.png',
    router:
      'https://res.cloudinary.com/dgthnv9ab/image/upload/v1610772856/Screenshot_from_2021-01-15_23-52-23_nnwer6.png',
    scrum:
      'https://res.cloudinary.com/dgthnv9ab/image/upload/v1610772857/Screenshot_from_2021-01-15_23-53-00_ylbry1.png',
  };

  return (
    <CourseMainContainer>
      <SectionTitle>Courses</SectionTitle>
      <Carousel
        breakPoints={breakPoints}
        enableAutoPlay={true}
        autoPlaySpeed="6000"
      >
        <CourseItem cover={Covers.algoritmos} />
        <CourseItem cover={Covers.programacionEstruc} />
        <CourseItem cover={Covers.terminal} />
        <CourseItem cover={Covers.git} />
        <CourseItem cover={Covers.desarrolloWeb} />
        <CourseItem cover={Covers.frontend} />
        <CourseItem cover={Covers.fundamentosJs} />
        <CourseItem cover={Covers.profesionalJs} />
        <CourseItem cover={Covers.reactJs} />
        <CourseItem cover={Covers.practicoreactjs} />
        <CourseItem cover={Covers.router} />
        <CourseItem cover={Covers.scrum} />
      </Carousel>
    </CourseMainContainer>
  );
};
