/* eslint-disable jsx-a11y/alt-text */
import logo from '../../assets/Logo.svg'
import { Container } from './styled'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <Container>
      <img src={logo} />
      <nav>
        <NavLink to="/" title="timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="hisorico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </Container>
  )
}
