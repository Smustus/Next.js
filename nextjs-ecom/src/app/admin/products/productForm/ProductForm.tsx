"use client"
import Label from "@/components/Label"
import Input from "@/components/Input"
import Button from "@/components/Button"
import { useState, ChangeEvent, useEffect } from "react"
import { formatSEK } from "@/tools/formatters"

const ProductForm = () => {

  const [formData, setFormData] = useState<{ [key: string]: string | number }>({
    name: '',
    price: 0,
    description: ''
  });

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

  return (
    <>
    <form>
     <fieldset>
      <Label htmlFor="name" text="Produktnamn: "></Label>
      <Input type="text" id="name" name="name" required onChange={handleChange}></Input>
     </fieldset>

     <fieldset>
      <Label htmlFor="price" text="Pris(öre): "></Label>
      <Input type="number" id="price" name="price" required onChange={handleChange}></Input>
      <div>
        {formatSEK(Number(formData.price) / 100) || 0}
      </div>
     </fieldset>

     <fieldset>
      <Label htmlFor="description" text="Produktbeskrivning: "></Label>
      <textarea name="description" id="description" required onChange={handleChange} value={formData.description as string} />
     </fieldset>

     <fieldset>
     <Label htmlFor="img" text="Bild: "></Label>
     <Input type="file" id="img" name="img" required></Input>
     </fieldset>

     <fieldset>
     <Label htmlFor="file" text="Nedladdningsfil: "></Label>
     <Input type="file" id="file" name="file" required></Input>
     </fieldset>

     <Button btnText="Lägg till" type="submit" />
    </form>
    </>
  )
}

export default ProductForm