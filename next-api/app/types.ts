type PostTemplate = {
  title: string,
  author: string,
  message: string,
  date: string
}

export type ProductTemplate = {
  id: number,
  title: string,
  borrowed: boolean,
  image: string,
  category: string,
  description: string,
  placement: string,
  reservedFrom: string,
  reservedTo: string,
}

export default PostTemplate;