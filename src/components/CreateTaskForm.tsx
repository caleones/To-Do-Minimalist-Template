import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Task } from '../types'

function CreateTaskForm() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [priority, setPriority] = useState('')

    const queryClient = useQueryClient()

    const createTaskMutation = useMutation({
        mutationFn: async (newTask: Omit<Task, 'id'>) => {
        const response = await fetch('http://localhost:3001/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTask),
        })
        if (!response.ok) throw new Error('Error al crear la tarea. Tendrás que escribir tu tarea en papel.')
        return response.json() as Promise<Task>
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] })
            setTitle('')
            setDescription('')
            setPriority('')
            setDueDate('')
        }
    })

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Crear Nueva Tarea</h2>
      <div className="flex flex-col">
        <label className="mb-1">Título de la Tarea:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 mb-2"
        />
        <label className="mb-1">Descripción de la tarea:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 mb-2"
        />
        <label className="mb-1">Fecha de Vencimiento:</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="border p-2 mb-2"
        />
        <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="border p-2 mb-2"
            >
                <option value="">Selecciona una prioridad</option>
                <option value="baja">Baja</option>
                <option value="media">Media</option>
                <option value="alta">Alta</option>
            </select>
        <button onClick={() => createTaskMutation.mutate({
                title,
                dueDate,
                completed: false,
                description,
                priority,
                createdAt: new Date().toISOString()
            })
        } className="bg-green-500 text-white px-4 py-2 rounded mt-2">
          Guardar Tarea
        </button>
      </div>
    </div>
  )
}

export default CreateTaskForm;
