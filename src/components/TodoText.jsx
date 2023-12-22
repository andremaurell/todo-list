import React from 'react'

const TodoText = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className={`bg-red-500 flex justify-between px-10 py-4 ${todo.isCompleted ? "bg-green-500" : ""}`}>
        <p className='flex items-center'>{todo.title}</p>
        <div className='flex gap-5'>
        <button className='bg-[#ccc] px-2 py-1 rounded-md' onClick={() => completeTodo(todo.id)}>Complete</button>
        <button className='bg-[#ccc] px-2 rounded-md' onClick={() => removeTodo(todo.id)}>X</button>
        </div>
    </div>
  )
}

export default TodoText