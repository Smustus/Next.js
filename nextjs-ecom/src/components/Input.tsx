import { ChangeEvent } from "react"


interface InputProps {
  type: string,
  id: string,
  name: string,
  required?: boolean,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({type, id, name, required, onChange}) => {
  return (
    <input type={type} id={id} name={name} required={required} onChange={onChange}/>
  )
}

export default Input