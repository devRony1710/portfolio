import React from 'react';

//styles
import { GlobalStyle } from '../assets/styles/Home';

//components
// import { Header } from '../components/Header/index';
// import { Main } from '../components/Main/index';
// import { About } from '../components/About/index';
// import { Projects } from '../components/Projects/index';
// import { Courses } from '../components/Courses/index';
// import { Contact } from '../components/Contact/index';
import { NotFound } from '../components/NotFound/NotFound';

const Home = () => {
  return (
    <>
      <GlobalStyle />
      {/* <Header />
      <Main />
      <About />
      <Projects />
      <Courses />
      <Contact /> */}
      <NotFound />
    </>
  );
};

export default Home;
