import { ContainerButton, ButtonVariant } from './styled'

interface ButtonProps{
    variant?: ButtonVariant; //variant_button_styled
}

export function Button ({variant = 'sucess'} : ButtonProps) {
    return(
        <ContainerButton variant={variant} >Enviar</ContainerButton>
    )
}