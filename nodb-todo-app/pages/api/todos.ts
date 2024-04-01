import { NextApiRequest, NextApiResponse } from "next";
import type Todo from "@/app/types";

export default function handler(req: NextApiRequest, res: NextApiResponse){
  switch(req.method){
    case "GET":
      return getTodos(req, res);
    default:
      res.status(405).end();
      break;
    }
}

const todos: Todo[] = [
  {
    id: '1',
    title: 'go shop',
    details: ['socks', 'underwear', 'milk'],
    completed: false
  },
  {
    id: '2',
    title: 'gym',
    details: ['chest', 'shoulders'],
    completed: false
  },
  {
    id: '3',
    title: 'study',
    details: ['biochemistry chapter 5', 'biochemistry chapter 6' ],
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