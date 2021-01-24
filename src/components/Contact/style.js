import styled from 'styled-components';

export const ContactTitle = styled.h2`
  font-size: 40px;
  margin: 30px 0;
  text-align: center;
`;

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 300px;
  width: 80%;
  margin: 20px auto;
  padding: 50px;
  box-shadow: 5px 9px 14px #394867;
  background: #252b43;
  border-radius: 5px;

  @media screen and (max-width: 700px) {
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

export const ContactImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    height: 100%;
    width: auto;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 20px;
  font-size: 20px;
  letter-spacing: 3px;
  color: #fff;

  & a {
    text-decoration: none;
    margin: 5px 0;
    color: #fff;
  }

  & p {
    margin: 5px 0;
  }
`;
