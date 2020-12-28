import styled from 'styled-components';

export const CardContainer = styled.div`
  height: 330px;
  width: 90%;
  margin-top: 50px;
  border: 1px solid #c3c3c3;
  border-radius: 20px;
  box-shadow: 5px 5px 9px #394867;
  background: #252b43;
  overflow: hidden;
  @media screen and (max-width: 700px) {
  }
`;

export const CardTitle = styled.h2`
  color: #7785ad;
  border-top: 5px solid #eaa81b;
  padding: 17px;
  text-align: center;
`;

export const CardDescription = styled.p`
  color: #fff;
  text-transform: capitalize;
  margin: 10px 0;
  padding: 20px;
`;

export const CardLink = styled.a`
  background: #394867;
  margin: 5px 20px;
  border: 1px solid #000;
  border-radius: 40px;
  color: #fff;
  text-decoration: none;
  padding: 10px;
`;
