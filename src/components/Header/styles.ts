import styled from "styled-components"

import { colors } from "../../styles/GlobalStyle"

export const SHeader = styled.header`
  /* Cabeçalho */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5rem solid ${colors.primary};
  height: 5rem;
  figure {
    display: flex;
    align-items: center;
    img {
      padding: 0.3rem;
    }
  }
`

export const NavBar = styled.nav`
  /* Navegação */
  display: flex;
  align-items: center;
  a {
    margin: 0 1rem;
    text-decoration: none;
    color: ${colors.black};
  }
  a:hover {
    font-weight: bold;
  }
`