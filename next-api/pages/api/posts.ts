import { NextApiRequest, NextApiResponse } from "next";

export default async function handles(req: NextApiRequest, res: NextApiResponse){
  switch(req.method){
    case 'GET':
      return await getPosts(req, res);
    default:
      res.status(405).end();
      break;
  }
}

const posts = [
  {
  title: 'greetings',
  author: 'billy',
  message: 'lorem ipsum dolor',
  date: '2022-04-22'
  },
  {
  title: 'greetings2',
  author: 'charlie',
  message: 'lorem ipsum dolor',
  date: '2026-03-22'
  },
  {
  title: 'greetings3',
  author: 'jamie',
  message: 'lorem ipsum dolor',
  date: '2022-08-13'
  },
]


async function getPosts(req: NextApiRequest, res: NextApiResponse){
  try {
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
