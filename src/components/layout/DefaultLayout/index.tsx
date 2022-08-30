import { Outlet } from 'react-router-dom'
import { Header } from '../../Header'
import { Container } from './styled'
export function DefaultLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  )
}
