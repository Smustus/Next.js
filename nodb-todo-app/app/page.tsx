import React from 'react'
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

function Home() {
 
  
  return (
    <main className="flex flex-col w-screen min-h-screen items-center p-2 bg-slate-700">
      <TodoForm />
      <TodoList />
    </main>
  );
}

export default Home;