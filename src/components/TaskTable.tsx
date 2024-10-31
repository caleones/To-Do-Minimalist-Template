import { useQuery } from '@tanstack/react-query'
import { Task } from '../types'

export default function TaskTable() {
  const { data: tasks, error, isLoading } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3001/tasks')
      if (!response.ok) throw new Error('Ha ocurrido un error por nuestro lado. Por favor perdónanos, vamos a agregar esto a nuestro To-Do y lo vamos a solucionar pronto. Ah, cierto, nuestro To-Do no sirve. Bueno, lo vamos a solucionar pronto.')
      return response.json() as Promise<Task[]>
    }
  })

  if (isLoading) return <div>Estamos cargando tus tareas, sé paciente, mientras puedes ir avanzando en tus tareas reales...</div>
  if (error) return <div>Oh no. {error.message}</div>

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
            <th className="p-2">#</th>
            <th className="p-2">Tarea</th>
            <th className="p-2">Descripción</th>
            <th className="p-2">Prioridad</th>
            <th className="p-2">Fecha de Vencimiento</th>
            <th className="p-2">Estado</th>
        </tr>
      </thead>
      <tbody>
        {tasks?.map(task => (
          <tr key={task.id}>
            <td className="p-2">{task.id}</td>
            <td className="p-2">{task.title}</td>
            <td className="p-2">{task.description}</td>
            <td className="p-2">{task.priority}</td>
            <td className='p-2'>
            {new Date(task.dueDate) < new Date() 
                ? 'Lo sentimos, parece que has procastinado la tarea' 
                : `Felicidades, aún tienes tiempo para completar la tarea. Hazlo antes de ${task.dueDate}`}
            </td>
            <td className="p-2">{task.completed ? 'Completada' : 'Pendiente'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}