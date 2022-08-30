import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  nav {
    display: flex;
    gap: 0.5rem;
    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-100']};
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      &:hover {
        border-top: 3px solid transparent;
        border-bottom: solid 3px ${({ theme }) => theme['green-500']};
      }
    }
  }
`
