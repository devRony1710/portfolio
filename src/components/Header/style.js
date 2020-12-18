import styled from 'styled-components'

export const HeaderNav = styled.header`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 70px;
  width: 100%;
  background: #132743;
`

export const ContainerImg = styled.div`
  display: flex;
`

export const Img = styled.img`
  margin: 0;
  object-fit: cover;
`

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListMenu = styled.ul`
  display: inline-flex;
`

export const MenuItem = styled.li`
  color: #ffffff;
  font-weight: 500;
  font-size: 15px;
  margin-right: 35px;
  list-style: none;
`

