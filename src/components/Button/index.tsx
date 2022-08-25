import { ContainerButton, ButtonVariant } from './styled'

interface ButtonProps {
  variant?: ButtonVariant
}

export function Button({ variant = 'sucess' }: ButtonProps) {
  return <ContainerButton variant={variant}>Enviar</ContainerButton>
}
