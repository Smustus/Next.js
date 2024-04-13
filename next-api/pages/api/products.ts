import { NextApiRequest, NextApiResponse } from "next";
import products from "@/pages/api/productList";

export default async function handles(req: NextApiRequest, res: NextApiResponse){
  switch(req.method){
    case 'GET':
      return await getProducts(req, res);
    default:
      res.status(405).end();
      break;
  }
}

async function getProducts(req: NextApiRequest, res: NextApiResponse){
  try {
    res.status(200).send(products);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
