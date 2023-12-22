import { useState } from 'react'
import TodoText from './components/TodoText'
import EditTodo from './components/EditTodo'


function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Go to gym', isCompleted: false },
    { id: 2, title: 'Study english', isCompleted: false },
    { id: 3, title: 'Edit a component in app', isCompleted: false },

  ])

  const addTodo = (title) => {
    const newTodos = [...todos, { id: todos.length + 1, title, isCompleted: false } ];
    setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null)
    setTodos(filteredTodos)
  }
  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }

  return (
    <div className='flex items-start justify-center bg-red-300 h-screen pt-10'>
    <div className='flex flex-col w-2/4 items-center justify-center mt-10 gap-8 bg-gray-400'>
      <h1 className='font-2xl'>TODOLIST</h1>
      <EditTodo addTodo={addTodo}/>
      <div className='flex flex-col gap-2 w-3/4 mb-10'>
      {todos.map((todo) => (
        <TodoText key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
      ))}
    </div>    
    </div>
    </div>
  )
}

export default App
