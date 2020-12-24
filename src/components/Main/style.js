import styled from 'styled-components'


export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #232323;
  height: 75vh;
  @media screen and (max-width: 700px) {
    width: auto;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    background: #21c2f8;
  }
`;


export const MainDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MainTitle = styled.p`
  font-size: 40px;
  color: #fff;
  margin-bottom: 60px;
  text-align: center;
  text-transform: capitalize;
`

export const MainContainerImg = styled.div`
  display: flex;
  justify-content: center;
`;

export const MainImg = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  @media screen and (max-width: 700px) {
    height: 400px;
    width: 100%;
  }
`;