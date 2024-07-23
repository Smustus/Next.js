"use server"

import prisma from "@/db/db";
import { z } from "zod";
import fs from "fs/promises"
import { redirect } from "next/navigation";

//https://developer.mozilla.org/en-US/docs/Web/API/FormData
//https://zod.dev/
//https://nodejs.org/api/fs.html


const fileVal = z.instanceof(File, { message: "Instance of File Required"})
const imageVal = fileVal.refine(file => file.size === 0 || file.type.startsWith("image/"));

const inputValidation = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  price: z.coerce.number().int().min(1),
  image: imageVal.refine(file => file.size > 0, "Required"),
  file: fileVal.refine(file => file.size > 0, "Required")
})

const addProduct =  async (prevState: unknown, formData: FormData) => {
  console.log(formData);
  const checkForm = inputValidation.safeParse(Object.fromEntries(formData.entries())); //convert to object and validate formdata

  if(checkForm.success === false){
    return checkForm.error.formErrors.fieldErrors
  }
  const data = checkForm.data;
  console.log(data);

  //make directories and save
  await fs.mkdir("public/products", {recursive: true});
  const imagePath = `/products/${crypto.randomUUID()}-${data.image.name}`; //unique path
  await fs.writeFile(`public${imagePath}`, Buffer.from(await data.image.arrayBuffer()))

  await fs.mkdir("products", {recursive: true});
  const filePath = `products/${crypto.randomUUID()}-${data.file.name}`; //unique path
  await fs.writeFile(filePath, Buffer.from(await data.file.arrayBuffer()))
  
  await prisma.product.create({ data: {
    title: data.title,
    description: data.description,
    priceHundredth: data.price,
    filePath,
    imagePath,
    available: false
    } 
  });

  redirect("/admin/products")
}

export default addProduct