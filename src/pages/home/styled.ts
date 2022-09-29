import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Form = styled.form`
  height: 100%;
  width: 70%;
  //border: solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 3.5rem;
`
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //border: solid;
  width: 100%;
`
export const Label = styled.label`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
`
export const Input = styled.input`
  background: transparent;
  height: 2rem;
  border: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  width: 100%;
  border-bottom: solid 1px ${(props) => props.theme['gray-500']};
  color: ${(props) => props.theme['gray-500']};
  padding-left: 5px;
  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['gray-500']};
  }
  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`
export const InputName = styled(Input)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
export const InputMinutes = styled(Input)`
  width: 4.5rem;
  text-align: center;
`

export default styled.span``

export const MinutesContent = styled.div`
  font-family: 'Roboto Mono', monospace;
  gap: 1rem;
  display: flex;
  flex-wrap: wrap;
  > span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
    font-size: 10rem;
  }
  .one,.tree{
    background: red;
  }
`
export const Separar = styled.span`
  color: ${(props) => props.theme['green-500']};
`
export const ButtonSubmit = styled.button`
  border-radius: 8px;
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  gap: 0.5rem;
  &:hover {
    background: ${(props) => props.theme['green-700']};
  }
  :disabled {
    background: ${(props) => props.theme['gray-500']};
  }
`
