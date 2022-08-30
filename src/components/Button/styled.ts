import styled, { css } from 'styled-components'

export type ButtonVariant =
  | 'primeiracolor'
  | 'segundacolor'
  | 'terceiracolor'
  | 'sucess'
interface ContainerButtonProps {
  variant: ButtonVariant
}
const buttonVariant = {
  primeiracolor: 'blue',
  segundacolor: 'red',
  terceiracolor: 'green',
  sucess: 'yellow',
}
export const ContainerButton = styled.button<ContainerButtonProps>`
  width: 100px;
  height: 40px;

  ${(props) => css`
    background-color: ${buttonVariant[props.variant]};
  `}
`
