import styled from 'styled-components'

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 93vh;
  background: linear-gradient(
    to right,
    #a4d7e8 25%,
    #a4d7e8 50%,
    #21c2f8 60%,
    #21c2f8 100%
  );
`;
export const ContainerDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.h1`
  padding: 70px;
  text-align: center;
  font-size: 60px;
  text-shadow: 6px 6px 7px #2e31ff; 
  color: #ffffff;
`

export const MainContainerImg = styled.div`
  display: flex;
  justify-content: center;
`

export const MainImg = styled.img`
  height: auto;
  object-fit: cover;
`