import styled from 'styled-components';

export const CourseContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80vh;
  width: 70%;
  margin: 20px auto;
  box-shadow: 5px 5px 12px #000;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    height: auto;
    width: 100%;
  }
`;

export const CourseImg = styled.img`
  height: auto;
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
