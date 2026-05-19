import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {removeTodo} from "../features/todo/todoSlice"

const Todos = () => {
    const todos=useSelector(state=>state.todos)

    const dispatch=useDispatch()
  return (
   <>
  <div className="max-w-md mx-auto mt-6 bg-white shadow-lg rounded-2xl p-5">
    
    <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
      Todos
    </h2>

    <ul className="space-y-3">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg hover:shadow-sm transition"
        >
          <span className="text-gray-700">{todo.text}</span>

          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            X
          </button>
        </li>
      ))}
    </ul>

  </div>
</>
  )
}

export default Todos
