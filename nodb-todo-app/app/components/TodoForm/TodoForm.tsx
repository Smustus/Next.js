import React from 'react'
import AddTodo from '../AddTodo/AddTodo';

const Form = () => {


  return (
    <form action={ AddTodo } className='flex flex-col justify-center items-center rounded p-6 text-xl text-slate-100 bg-slate-500'>
        <h2 className='m-4'>Add a todo</h2>
        <fieldset className='col-span-full grid grid-cols-5 m-2 place-items-center'>
          <label htmlFor="task" className='col-start-1'>Task: </label>
          <input type="text" id="task" name="task" placeholder='Add task' className='col-start-2 col-span-4 text-slate-900 p-1 rounded'/>
        </fieldset>
        <fieldset className='col-span-full grid grid-cols-5 m-2 place-items-center'>
          <label htmlFor="details" className='col-start-1'>Details: </label>
          <input type="textarea" id="details" name="details" placeholder='Add details' className='col-start-2 col-span-4 text-slate-900 p-1 rounded'/>
        </fieldset>
        <button type='submit' className='bg-slate-800 py-3 px-4 m-2 rounded hover:bg-slate-700 active:scale-95'>Submit</button>
      </form>
  )
}

export default Form;