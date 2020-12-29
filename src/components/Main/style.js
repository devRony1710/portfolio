import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://images.unsplash.com/photo-1580637250481-b78db3e6f84b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80');
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  height: 90vh;
  @media screen and (max-width: 700px) {
    height: 100vh;
    width: auto;
  }
`;

export const MainDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 700px) {
    grid-row: 2;
  }
`;

export const MainTitle = styled.p`
  font-size: 50px;
  color: #051626;
  margin-bottom: 60px;
  text-align: center;
  text-transform: capitalize;
  @media screen and (max-width: 700px) {
    font-size: 25px;
    margin-top: 30px;
  }
`;
