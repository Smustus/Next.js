"use client"
import React from 'react'

type TodoProps = {
  id: string
  title: string
  done: boolean
  toggleTodoState: (done: boolean, id: string) => void;
}

const TodoItem = ({id, title, done, toggleTodoState}: TodoProps) => {
  return (

    <article>
      <input type="checkbox" id={ id } defaultChecked={ done } className='cursor-pointer peer' onChange={e => toggleTodoState(e.target.checked, id) }/>
      <label htmlFor={ id } className='peer-checked:line-through peer-checked:text-slate-500 cursor-pointer peer'> {title}</label>
    </article>
  )
}

export default TodoItem