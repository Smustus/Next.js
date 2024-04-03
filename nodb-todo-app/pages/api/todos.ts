import { NextApiRequest, NextApiResponse } from "next";
import type TodoTemplate from "@/app/types";

export default function handler(req: NextApiRequest, res: NextApiResponse){
  switch(req.method){
    case "GET":
      return getTodos(req, res);
    case "POST":
      return addTodo(req, res);
    default:
      res.status(405).end();
      break;
    }
}

const todos: TodoTemplate[] = [
  {
    id: '1',
    title: 'go shop',
    details: 'socks, underwear, milk',
    completed: false
  },
  {
    id: '2',
    title: 'gym',
    details: 'chest, shoulders',
    completed: false
  },
  {
    id: '3',
    title: 'study',
    details: 'biochemistry chapter 5, biochemistry chapter 6',
    completed: false
  },
]

async function getTodos(req: NextApiRequest, res: NextApiResponse){
  try {
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

async function addTodo(req: NextApiRequest, res: NextApiResponse){
  try {
    // Parse the incoming request body to extract the new todo data
    const newTodo: TodoTemplate = req.body;
    newTodo.id = String(todos.length + 1);
    // Push the todo to the todos array
    todos.push(newTodo);
    // Return the added todo as the response
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: error })
  }
}