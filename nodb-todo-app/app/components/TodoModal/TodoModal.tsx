"use client"
import React from 'react'

const TodoModal = (props: any) => {
  
  const { title, details, completed, closeDialog } = props;

  return (
    <article className='flex flex-col justify-center items-center'>
      <h3>{ title }</h3>
      <p>{ details }</p>
      <p className={`${completed ? 'text-green-800' : 'text-red-900'}`}>{`${completed ? 'Completed' : 'Uncompleted'}`}</p>
      <section className='flex'>
        <button className='m-5'>Done</button>
        <button onClick={ closeDialog } className='bg-black text-white m-5'>Cancel</button>
      </section>
    </article>
  )
}

export default TodoModal;