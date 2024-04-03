"use server"
import TodoTemplate from '@/app/types';
import { revalidatePath } from 'next/cache';


const AddTodo = async (data: FormData) => {
    const title = data.get("task")?.valueOf();
    const details = data.get("details")?.valueOf();
    
    if(typeof title !== 'string' || title.length === 0 || typeof details !== 'string'){
      return
    }  
    const todo = {
      id: '',
      title,
      details,
      completed: false,
    };
  
    const response = await fetch('http://localhost:3000/api/todos', {
      method: "POST",
      body: JSON.stringify(todo), 
      headers: {
        'Content-Type': 'application/json' 
        }
    });  
    const apiData: TodoTemplate = await response.json();
    console.log(apiData);
    revalidatePath("/");
    return apiData;
}

export default AddTodo;