import { Play } from 'phosphor-react'
import Span, {
  Container,
  Form,
  Label,
  Content,
  MinutesContent,
  Separar,
  ButtonSubmit,
  InputName,
  InputMinutes,
} from './styled'
export function App() {
  return (
    <Container>
      <Form>
        <Content>
          <Label htmlFor="">Vou trabalhar em: </Label>
          <InputName
            type="text"
            id="task"
            list="projects_recents"
            placeholder="exmplo:Focus time"
          />

          <datalist id="projects_recents">
            <option value="project1"></option>
            <option value="project2"></option>
            <option value="project3"></option>
            <option value="project4"></option>
          </datalist>

          <Label htmlFor="">Durante </Label>
          <InputMinutes
            type="number"
            id="minutes"
            placeholder="00:00"
            step={5}
            min={5}
            max={60}
          />

          <Span>Minutos.</Span>
        </Content>

        <MinutesContent>
          <span>0</span>
          <span>0</span>
          <Separar>:</Separar>
          <span>0</span>
          <span>0</span>
        </MinutesContent>

        <ButtonSubmit type="submit">
          <Play />
          Começar
        </ButtonSubmit>
      </Form>
    </Container>
  )
}
