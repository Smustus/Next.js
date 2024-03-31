import { prisma } from '@/db';
import React from 'react'
import TodoItem from '@/components/TodoItem/TodoItem';
import Link from 'next/link';
import NewTodo from '../new/page';

async function toggleTodoState(done: boolean, id: string){
  "use server"
  console.log(done, id);
  //Matches ID and update done value
  await prisma.todoInfo.update({ where: {id}, data: {done} })
}

const TodosPage = async () => {

const todosArr = await prisma.todoInfo.findMany()
console.log(todosArr);

const todos = todosArr.map((todo, index) => {
  return <TodoItem key={index} {...todo} toggleTodoState={ toggleTodoState }/>
});

  return (
    <main className='flex flex-col justify-center items-center mb-auto mt-8'>

      <NewTodo />

      <section className='flex flex-col justify-center items-center mb-auto mt-8'>
        {/* <Link href="/new" className='border border-slate-400 bg-transparent rounded outline-none focus-within:border-slate-100 hover:bg-slate-700 p-2'>New Todo</Link> */}
        <ul className="p-4">
          {todos}
        </ul>
      </section>
      
    </main>
  )
}

export default TodosPage;