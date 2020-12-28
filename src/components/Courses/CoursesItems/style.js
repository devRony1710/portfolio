import styled from 'styled-components';

export const CourseContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  margin: 20px auto;
  border: 1px solid #000;
  border-radius: 20px;
  box-shadow: 5px 5px 12px #000;
  background: #fff;

  @media screen and (max-width: 700px) {
    height: auto;
    flex-direction: column;
    width: 100%;
  }
`;

export const ContainerDescription = styled.div`
  margin: 0 50px;
`;

export const CourseImg = styled.img`
  height: 200px;
  width: 30%;
  object-fit: cover;
  border-bottom: 3px solid #232323;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const CourseTitle = styled.h2`
  margin: 20px;
  font-size: 20px;
`;

export const CourseDescription = styled.p`
  font-weight: bold;
  margin: 15px;
`;
