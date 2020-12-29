import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #051626;
  @media screen and (max-width: 700px) {
    width: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const AboutContainerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;

export const AboutImg = styled.img`
  object-fit: cover;
  @media screen and (max-width: 700px) {
    height: 300px;
    width: 300px;
    object-fit: cover;
  }
`;

export const AboutContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  @media screen and (max-width: 700px) {
    justify-content: left;
    width: 90%;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  color: #fff;
  @media screen and (max-width: 700px) {
    text-align: center;
    font-size: 25px;
    margin-top: 20px;
  }
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 17px;
  margin-top: 20px;
  color: #fff;
  @media screen and (max-width: 700px) {
    text-align: justify;
    margin-top: 20px;
    font-size: 14px;
  }
`;
