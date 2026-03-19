import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {addTodo} from '../features/todo/todoSlice'

const AddTodo = () => {
    const [input,setInput]=useState('');
    const dispatch=useDispatch();

    const addTodoHandler=(e)=>{
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('');
    }
  return (
   <form
      onSubmit={addTodoHandler}
      className="flex items-center gap-3 p-4 bg-white shadow-md rounded-xl"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Add
      </button>
    </form>
  )
}

export default AddTodo
