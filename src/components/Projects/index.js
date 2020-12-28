import React from 'react';

import { ProjectsContainer } from './style';

import { ProjectsItem } from './ProjectItem/index';

export const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectsItem
        title="Social Media Dashboard"
        description="Template inspired at frontend mentor using html and css, following concept mobile first, layout practice."
        link="https://devrony1710.github.io/Social-Media-Dashboard/"
        linkName="View Project"
      />
      <ProjectsItem
        title="PlatZi Badges"
        description="Business cards creator, project carried out in the React js course at Platzi whit the focus of PlatziConf"
        link="https://platzi-badges-inky.vercel.app/"
        linkName="View Project"
      />
      <ProjectsItem
        title="Platzi Video"
        description="Platzi Video is the result of the JavaScript school, for now only the repository visible, at this moment the backend is being built"
        link="https://devrony1710.github.io/Social-Media-Dashboard/"
        linkName="View Repository"
      />
    </ProjectsContainer>
  );
};
