import styled from 'styled-components'

export const Container = styled.div`
  width: 74rem;
  height: 90vh;
  //border: solid red;
  margin: 5rem auto;
  background: ${({ theme }) => theme['gray-800']};
  //border: solid red;
  padding: 2.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`
