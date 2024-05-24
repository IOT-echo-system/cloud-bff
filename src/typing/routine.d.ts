export type Routine = {
  projectId: string
  routineId: string
  name: string
  enable: boolean
  events: RoutineEvent[]
  tasks: Task[]
}
