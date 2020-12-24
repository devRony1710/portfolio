import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 90vh;
  @media screen and (max-width: 700px) {
    width: auto;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    background: #21c2f8;
  }
`;

export const MainContainerImg = styled.div`
  display: flex;
  justify-content: center;
`;

export const MainImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  @media screen and (max-width: 700px) {
    height: 400px;
    width: 100%;
  }
`;