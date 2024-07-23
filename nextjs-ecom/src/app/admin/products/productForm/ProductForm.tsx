"use client"
import Label from "@/components/Label"
import Input from "@/components/Input"
import Button from "@/components/Button"
import { useState, ChangeEvent, useEffect } from "react"
import { formatSEK } from "@/tools/formatters"
import addProduct from "../../_actions/products"
import { useFormState, useFormStatus } from "react-dom"

const ProductForm = () => {
  const [formData, setFormData] = useState<{ [key: string]: string | number }>({
    name: '',
    price: 0,
    description: ''
  });

  const [error, formAction] = useFormState(addProduct, {});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: id === 'price' ? Number(value) : value
    }));
  };
  useEffect(() => {
    console.log(formData);
  });

  function SubmitBtn() {
    const { pending } = useFormStatus();  
    return <Button btnText={pending ? "Sparar" : "Lägg till" } type="submit" disabled={pending} />
  }

  return (
    <>
    <form action={formAction}>
     <fieldset>
      <Label htmlFor="title" text="Produktnamn: " />
      <Input type="text" id="title" name="title" required onChange={handleChange} />
      {error.title && <article className="text-red-700">{error.title}</article>}
     </fieldset>

     <fieldset>
      <Label htmlFor="price" text="Pris(öre): " />
      <Input type="number" id="price" name="price" required onChange={handleChange} />
      {error.price && <article className="text-red-700">{error.price}</article>}
      <div>
        {formatSEK(Number(formData.price) / 100) || 0}
      </div>
      
     </fieldset>

     <fieldset>
      <Label htmlFor="description" text="Produktbeskrivning: " />
      <textarea name="description" id="description" required onChange={handleChange} value={formData.description as string} />
      {error.description && <article className="text-red-700">{error.description}</article>}
     </fieldset>

     <fieldset>
     <Label htmlFor="image" text="Bild: " />
     <Input type="file" id="image" name="image" required />
     {error.image && <article className="text-red-700">{error.image}</article>}
     </fieldset>

     <fieldset>
     <Label htmlFor="file" text="Nedladdningsfil: " />
     <Input type="file" id="file" name="file" required />
     {error.file && <article className="text-red-700">{error.file}</article>}
     </fieldset>

     <SubmitBtn />
     
    </form>
    </>
  )
}

export default ProductForm