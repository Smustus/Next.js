import { prisma } from '@/db';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'


async function createTodo(data: FormData){
  "use server"

  //Extract data, matched by name attribute
  const title = data.get("title")?.valueOf()
  console.log(title);
  if(typeof title !== 'string' || title.length === 0){
    throw new Error('Invalid input')
  }  
  await prisma.todoInfo.create({ data: { title, done: false } });
  redirect("/todos")  
}


const NewTodo = () => {

  return (
    <section className='flex flex-col justify-evenly items-center mb-auto mt-8'>
      <h1 className='text-center'>
        Add new todo
      </h1>
      <form action={ createTodo } className='flex flex-col'>
        <fieldset  className='my-1'>
          <label htmlFor="title">Title: </label>
          <input type="text" id="title" name='title' className='border border-slate-400 bg-transparent rounded outline-none focus-within:border-slate-100 p-1'/>
        </fieldset>
        <fieldset className='flex gap-1 justify-end items-center mt-1'>
          <button type='submit' className='border border-slate-400 bg-transparent rounded outline-none focus-within:border-slate-100 p-1 hover:bg-slate-700'>Add</button>
          <Link href=".." className='border border-slate-400 bg-transparent rounded outline-none focus-within:border-slate-100 p-1 hover:bg-slate-700'>Cancel</Link>
        </fieldset>
      </form>
    </section>
  )
}

export default NewTodo;