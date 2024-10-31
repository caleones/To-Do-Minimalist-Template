import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function DeleteTaskForm() {

  const [taskId, setTaskId] = useState('')

  const queryClient = useQueryClient()

  const deleteTaskMutation = useMutation({
        mutationFn: async (taskId: string) => {
            const response = await fetch(`http://localhost:3001/tasks/${taskId}`, {
                method: 'DELETE',
            })
            if (!response.ok) throw new Error('Error al eliminar la tarea. Haz como que no existe.')
            return response.json() as Promise<void>
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] })
            setTaskId('')
        }
    })

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Eliminar Tarea</h2>
      <div className="flex flex-col">
        <label className="mb-1">ID de la Tarea a Eliminar:</label>
        <input
          type="text"
          value={taskId}
          onChange={(e) => setTaskId(e.target.value)}
          className="border p-2 mb-2"
        />
        <button
                onClick={() => deleteTaskMutation.mutate(taskId)} // Reemplaza 'task-id' con el ID de la tarea que deseas eliminar
                className="bg-red-500 text-white p-2 mt-2"
            >
                Eliminar Tarea
            </button>
      </div>
    </div>
  )
}
