import React from 'react'
import type Todo from './types';


async function Home() {

  /* const response = await fetch('/api/todos');
  console.log(response);
  const data: Todo[] = await response.json();
  console.log(data); */

  const response = await fetch('/api/todos');
  console.log(response);
  

  /* const todos = data.map((obj, index) => {
      return (
        <article key={obj.id} className={`${index === 0 ? 'rounded-t' : todos.length - 1 !== index ? '' : 'rounded-b'} grid grid-cols-4 auto-rows-auto p-6 hover:bg-slate-200 hover:cursor-pointer`}>
          <section className="col-span-1 pr-2">
            <h2 >{obj.title}</h2>
          </section>
          <section className="col-span-2 px-4">
            <p >{obj.details.join(', ')}</p>
          </section>
          <section className="col-span-1 pl-2 text-end">
            <p className={`${obj.completed ? 'text-green-800' : 'text-red-900'}`}>{obj.completed ? 'completed' : 'uncompleted'}</p>
          </section>
        </article>
      )
    }) */
  
  return (
    <main className="flex flex-col w-full min-h-screen justify-center items-center p-2 bg-slate-700 rounded">
      <h1 className="text-slate-100 m-5">List of todos</h1>
      <section className="bg-slate-300 rounded text-slate-900">
        <section className="flex justify-between text-center p-6 bg-slate-500 rounded-t text-slate-200">
          <h3>Task</h3>
          <h3>Details</h3>
          <h3>Status</h3>
        </section>
        {/* { todos } */}
        
      </section>
    </main>
  );
}

export default Home;