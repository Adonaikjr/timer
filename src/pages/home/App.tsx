import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
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

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
})
interface NewCycleFormData {
  task: string
  minutesAmount: Number
}

export function App() {
  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  })
  function handleCreateNewCycle(data: any) {
    console.log(data)
  }

  const task = watch('task')
  const isSubmitDisable = !task

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <Content>
          <Label htmlFor="">Vou trabalhar em: </Label>
          <InputName
            type="text"
            id="task"
            list="projects_recents"
            placeholder="exmplo:Focus time"
            {...register('task')}
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
            {...register('minutesAmount', { valueAsNumber: true })}
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

        <ButtonSubmit disabled={isSubmitDisable} type="submit">
          <Play />
          Começar
        </ButtonSubmit>
      </Form>
    </Container>
  )
}
