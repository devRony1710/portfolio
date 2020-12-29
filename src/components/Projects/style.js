import styled from 'styled-components';

export const ProjectLayout = styled.div`
  background: #e4e4e4;
`;

export const SectionTitle = styled.h2`
  padding-top: 40px;
  text-align: center;
  color: #051626;
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  padding: 30px;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
