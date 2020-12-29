import React from 'react';

import { CourseItem } from './CoursesItems/index';
import { CourseMainContainer, SectionTitle } from './style';

import CoverJs from '../../assets/static/JS.png';
import coverReact from '../../assets/static/React.png';

export const Courses = () => {
  return (
    <CourseMainContainer id="Courses">
      <SectionTitle>Courses</SectionTitle>
      <CourseItem
        cover={CoverJs}
        title="Curso de Fundamentos de JS"
        description="Este curso fue el primero con el que conocí el lenguaje de programación JavaScript, Logre adquirir las bases necesarias para poder implementar interactividad en mis futuros proyectos"
        link="https://platzi.com/p/ronyaab1710/curso/1339-fundamentos-javascript/diploma/detalle/"
      />
      <CourseItem
        cover={CoverJs}
        title="Curso Profesional de JS"
        description="Luego de obtener las bases del lenguaje JavaScript, seguí profundizando en temas más avanzados y en carácteristicas especiales sobre este lenguaje, el curso profesional de JavaScript me ayudo a cumplir dicho objetivo"
        link="https://platzi.com/p/ronyaab1710/curso/1642-javascript-profesional/diploma/detalle/"
      />
      <CourseItem
        cover={coverReact}
        title="Curso de ReactJs"
        description="Con el enfoque de convertirme en desarrollador FrontEnd continue mis estudios con el curso de React Js, para poner en practica todos mis conocimientos previos a través de esta Librería"
        link="/"
      />
      <CourseItem
        cover={coverReact}
        title="Curso Practico de ReactJs"
        description="Una vez me abrí paso para iniciar en el mundo de ReactJs, decidí enfrentar un reto más completo, el curso Practico de React Js fue el impulsor de este objetivo, el cual sería terminar platzi video, Un proyecto de la Escula de Js de platzi que cuenta con su respectivo FrontEnd y Backend"
        link="https://platzi.com/p/ronyaab1710/curso/1651-course/diploma/detalle/"
      />
      <CourseItem
        cover={coverReact}
        title="Curso de React Router y Redux"
        description="React Router y Redux fue un gran paso en mi carrera como Dev, adquiriendo nuevos conocimientos e implementando el manejo de herramientas que mejoraran la performance de mis futuros proyectos"
        link="https://platzi.com/p/ronyaab1710/curso/1652-course/diploma/detalle/"
      />
    </CourseMainContainer>
  );
};
