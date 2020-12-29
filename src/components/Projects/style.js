import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  padding: 30px;
  background: #e4e4e4;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
