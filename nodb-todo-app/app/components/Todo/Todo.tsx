"use client"
import React, { useEffect, useRef, useState } from 'react'
import TodoModal from '../TodoModal/TodoModal';

const Todo = (props: any) => {

  const { data, index } = props;
  const [toggleModal, setToggleModal] = useState(false);
  
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && toggleModal) {
        closeDialog();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

  //setTimeout to make sure its executed in sync
  const openDialog = () => {
    setToggleModal(true);
    setTimeout(() => {
      if (dialogRef.current) dialogRef.current.showModal();
    }, 0);
  };

  const closeDialog = () => {
    setToggleModal(false);
    if (dialogRef.current) dialogRef.current.close();
  };
  
  
  return (
    <>
      {toggleModal && 
      <dialog id="dialog" ref={dialogRef} className='flex justify-center items-center w-6/12 h-3/4 m-auto fixed inset-0'>
        <TodoModal id={data.id} title={ data.title } details={ data.details } completed={ data.completed } closeDialog={ closeDialog }/>
      </dialog>
      }

      <article className={`${index === 0 ? 'rounded-t' : data.length - 1 !== index ? '' : 'rounded-b'} grid grid-cols-4 auto-rows-auto p-6 hover:bg-slate-200 hover:cursor-pointer`} onClick={ openDialog }>
        <section className="col-span-1 pr-2">
          <h2 >{data.title}</h2>
        </section>
        <section className="col-span-2 px-4">
          <p >{data.details}</p>
        </section>
        <section className="col-span-1 pl-2 text-end">
          <p className={`${data.completed ? 'text-green-800' : 'text-red-900'}`}>{data.completed ? 'completed' : 'uncompleted'}</p>
        </section>
      </article>
    </>

  )
}

export default Todo;