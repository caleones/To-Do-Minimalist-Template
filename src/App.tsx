import {useState} from 'react';
import TaskTable from './components/TaskTable';
import CreateTaskForm from './components/CreateTaskForm'
import DeleteTaskForm from './components/DeleteTaskForm'

function App() {

  const [showCreateForm, setShowCreateForm] = useState(false)
  const [showDeleteForm, setShowDeleteForm] = useState(false)

  return <>
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold">The Minimalist To-Do</h1>
    </header>

    <main className="container mx-auto p-4">
      <p>Bienvenido al To-Do más minimalista del mercado. Hemos conducido un estudio de mercado acerca de las nuevas tendencias en diseño UI/UX y hemos encontrado un segmento de mercado importante: el minimalista. Esta aplicación hace lo que todo To-Do debe hacer. Crear, leer, actualizar y borrar tareas, bueno menos actualizar. Por ahora.</p>
      <h1 className="text-2xl font-bold">Lista de Tareas</h1>
      <TaskTable />
      <h1 className="text-2xl font-bold">Acciones</h1>
      <p>Muy bien, esas son las tareas que tiene en su agenda. Ahora <b>¿qué desea hacer?</b> <span className='text-red-500'>Eliminarlas?</span> <span className='text-green-500'>¿Desea amplificar su sufrimiento agregando una nueva tarea?</span> ¿De casualidad es usted de esos que agregan y agregan tareas a gestores de To-Do's y nunca hace nada? Bueno, sea cual sean sus circunstancias, abajo tiene las acciones disponibles.</p>

        {/* Sección de botones */}
        <div className="flex justify-around mt-8">
        <button
          onClick={() => {
            setShowCreateForm(!showCreateForm)
            setShowDeleteForm(false) // Ocultar el formulario de eliminar al abrir crear
          }}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Crear Tarea
        </button>
        <button
          onClick={() => {
            setShowDeleteForm(!showDeleteForm)
            setShowCreateForm(false) // Ocultar el formulario de crear al abrir eliminar
          }}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Eliminar Tarea
        </button>
      </div>

      {/* Formulario de Crear Tarea */}
      {showCreateForm && <CreateTaskForm />}

      {/* Formulario de Eliminar Tarea */}
      {showDeleteForm && <DeleteTaskForm />}
    </main>
  </>;
}

export default App;