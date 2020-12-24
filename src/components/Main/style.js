import styled from 'styled-components'


export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #232323;
  height: 75vh;
  @media screen and (max-width: 700px) {
    height: 100vh;
    width: auto;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    background: #232323;
  }
`;


export const MainDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 700px) {
    grid-row: 2
  }
`

export const MainTitle = styled.p`
  font-size: 40px;
  color: #fff;
  margin-bottom: 60px;
  text-align: center;
  text-transform: capitalize;
  @media screen and (max-width: 700px) {
    font-size: 30px;
    margin-top: 30px;
  }
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