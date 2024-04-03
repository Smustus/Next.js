import React from 'react'
import type TodoTemplate from '@/app/types';
import Todo from '../Todo/Todo';


async function TodoList() {
  const response = await fetch('http://localhost:3000/api/todos', {
  });
  const data: TodoTemplate[] = await response.json();
  
  const todos = data.map((obj, index) => {
    return <Todo key={ index } data={ obj } index={ index }/>
  })
  return (
    <section className="bg-slate-300 rounded text-slate-900 m-6">
        <section className="flex justify-between text-center p-6 bg-slate-500 rounded-t text-slate-200">
          <h3>Task</h3>
          <h3>Details</h3>
          <h3>Status</h3>
        </section>
        <section className='p-1'>
          { todos }
        </section>
      </section>
  )
}

export default TodoList

