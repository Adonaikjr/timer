import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { differenceInSeconds } from 'date-fns'
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
import { useEffect, useState } from 'react'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle{ //Cycle
  id: string
  task: string
  minutesAmount: number
  startDate: Date
}


export function App() {

  const [ cycles, setCycles ] = useState<Cycle[]>([])
  const [ amoutSecondPassed, setAmountSecondsPassed ] = useState(0)
  const [activecycleid, setActivecycleid] = useState<string | null>(null)
  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  })

  const activeCycle = cycles.find((cycle) => cycle.id === activecycleid)

  useEffect(() => {
    if (activeCycle) {
      setInterval(() => {
        setAmountSecondsPassed(
          differenceInSeconds(new Date(), activeCycle.startDate),
        )
      }, 1000)
    }
  }, [activeCycle])


  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime() )
    const newCycle:Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date()
    }
    setCycles((state) => [...state, newCycle] )

    setActivecycleid(id)
  }
  const totalSecond = activeCycle ? activeCycle.minutesAmount * 60 : 0

  const currentSecond = activeCycle ? totalSecond - amoutSecondPassed : 0

  const minutesAmount = Math.floor(currentSecond / 60)

  const secondsAmout = currentSecond % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmout).padStart(2, '0')



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
          <span>{minutes[1]}</span>
          <span>{seconds[0]}</span>
          <Separar>:</Separar>
          <span>{seconds[1]}</span>
          <span>{seconds[0]}</span>
        </MinutesContent>

        <ButtonSubmit disabled={isSubmitDisable} type="submit">
          <Play />
          Começar
        </ButtonSubmit>
      </Form>
    </Container>
  )
}
