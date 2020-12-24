import styled from 'styled-components'

export const Svg = styled.svg`
  background: #232323;
`

export const MenuButtonWrapper = styled.button`
  border: none;
  box-shadow: 0px 0px 1px rgb(50, 50, 50);
  margin-top: 1.3rem;

  @media only screen and (min-width: 624px) {
    display: none;
  }
`;